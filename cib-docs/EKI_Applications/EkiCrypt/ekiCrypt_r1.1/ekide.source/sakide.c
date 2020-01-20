/*
	sakide - parancssori példaprogram az IEB sakiCrypt nevû titkosító lib-hez.
	(C) Kónya Boldizsár, 1999.
 */

/*
   $Date$
   $Id$
	 $Name$
	 $Log$
	 $State$
*/

#ifndef _GNU_SOURCE
#define _GNU_SOURCE
#endif

#include "platform.h"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#ifdef NO_GLIBC
#include "getopt/getopt.h"
#else
#include "sys/utsname.h"
#endif

#ifndef WIN32
#include <unistd.h>
#else
#include <windows.h>
#define ssize_t size_t
#endif

#include "sakiCrypt.h"

#ifndef VERSION_MAJOR
#define VERSION_MAJOR "1"
#define VERSION_MINOR "5"
#define MODIFIED "12.14.1999"
#define AUTHOR "Boldizsar Konya"
#endif


#define GETOPTIONS "edc:Chijm:p:vs:SuV"
#define ENC_BUFLEN 4

typedef enum { ENCRYPT, DECRYPT } T_CryptMode;

T_CryptMode mode = ENCRYPT;

char *ModeText[] = {"encrypt", "decrypt"};

char *Response[] =
{
	"UER_OK",
	"UER_NOKEY",
	"UER_NOFILE",
	"UER_BADPAD",
	"UER_BADPARM",
	"UER_NOMEM",
	"UER_BADSIZE",
	"UER_BADURL",
	"UER_CRC",
	"UER_BADKEY"
};


int CryptoType, // Titkosítás típusa (0,1,2,3) - jelenleg csak az 1 és 3 van érvényben
	verbose, // Plusz információk kiírása a stderr-re.
	DataLen,  // Becsült bufferméret
	urldecode,  // Kell-e URL dekódolást végezni?
	NullCrypto=0,  // Crypto=3 esetén benne hagyja-e a Crypto paramétert a kititkosított adatban?

	/* 1999.11.23 Boldi */
	KeyInfoMode=0, // KeyFilePath + MarketKeyId-ban megadott kulcs információk kérése?
	ForceKeyInfo=0;  // Akkor is, ha rossz az egész :-)

char *data = NULL, // A feldolgozandó adat buffere
	*outdata = NULL, // A feldolgozás eredménye
	*KeyFilePath = NULL,  // Kulcsfile helye filenév nélkül

	/* 1999.11.23 Boldi */
	*MarketKeyId = NULL;  // KUlcs azonosítója (elsõ 3 karakter)



void usage() 
{
	char libver[10];
	int vl = 10;
	int cres;
	cres = ekiGetLibVersion(libver, &vl);
	if (cres != UER_OK)
		sprintf(libver, "ERROR!");
	
	printf("sakide (ekide) %s.%s, %s, %s (sakiCrypt version: %s)\n\
Usage: sakide [OPTION]\n\
\t-e\t\tencryption mode (default)\n\
\t-d\t\tdecryption mode\n\
\t-c TYPE\t\tCrypto mode: 0,1,2,3 (default: 1).\n\
\t-i\t\trequest key information. Needs -m.\n\
\t-j\t\tGet key info even if an error occured.\n\
\t-m Key ID\tKey ID\n\
\t-p PATH\t\tKeyfile path (default: ./)\n\
\t-v\t\tExtra info to STDERR\n\
\t-s DATA\t\tDATA from cmdline instead of STDIN\n\
\t-S\t\tPrint system information to STDOUT and exit.\n\
\t-u\t\tDo URL decode\n\
\t-V\t\tDisplay version information and exit.\n\n", VERSION_MAJOR, VERSION_MINOR, MODIFIED, AUTHOR, libver);
}

void ekiSystemInfo() {
#ifndef NO_GLIBC
	struct utsname UTS;
	if (!uname (&UTS)) {
		printf ("System information:\n*******************\n\nSystem name: %s\nNetwork name: %s\nOS Release: %s\nOS Version: %s\nMachine: %s\n", UTS.sysname, UTS.nodename, UTS.release, UTS.version, UTS.machine);
	} else {
		printf ("Unable to get system information.\n");
	};
#else
	printf ("This function only available if glibc used at compile time.\n");
#endif
}

int is_hex(char hex) 
{ 
	// Ha betû, akkor nagybetûre konvertál.
    if(isalpha(hex)) 
		hex = toupper((int)hex); 
 
		if(((hex >= 'A') && (hex <= 'F')) || ((hex >= '0') && (hex <= '9')))
			return 1;
		else
			return 0;
} 


char *url_decode(char *EncodedString)
{
	char digit;
	char *enc, *dec, *new;


	// Helyfoglalás a dekódolt sztring számára, ha nem sikerül, NULL pointer megy vissza
	if	( (new = (char *) malloc((strlen(EncodedString) + 1) * sizeof(char))) == NULL) 
		return NULL;


	for(enc = EncodedString, dec = new; *enc; enc++, dec++)
	{ 
		
		if(*enc != '%') 
		{ 
			if(*enc == '+') 
				*dec = ' '; 
			else 
				*dec = *enc; 
		} 
		else 
		{ 
			// Ellenõrizzük, hogy hexa kódunk van-e
			if((!is_hex(enc[1])) || (!is_hex(enc[2])))
			{
				free (new);
				return 0;
			}

			if ( (enc[1] == '0') && (enc[2] == 'D') )
			{
				continue;
			}

			// A % jel utáni elsõ karakterrel kezdi a dekódolást
			// Oxdf-et hasznal a nagybeture konvertalashoz
			++enc; 
			if (*enc >= 'A')
				(digit = 16 * (((*enc & 0xdf) -'A') + 10));
			else
				(digit = 16 * (*enc - '0'));

			++enc; 
			if (*enc >= 'A')
				(digit += (((*enc & 0xdf) -'A') + 10));
			else
				(digit += (*enc - '0'));

			*dec = digit; 
		} 
	}

	*dec = *enc;

	return new;
}


#if (defined NO_GLIBC) || (defined LIBC5)

/* Ez nem a GNU LIBC fele getline, csak a nevuk egyforma...:-)
   Egyszeruen olvas egy sort STREAM-bol, a '\n' karaktert kivagja 
   Azert jobb, ha a GNU LIBC-t hasznalod.
*/
ssize_t getline (char **LINEPTR, size_t *N, FILE *STREAM) 
{
	int CIN;
	char *buf1=NULL, *buf2=NULL;
	int error=0;
	int CurLen = 0;
	
	CIN = (char)fgetc(STREAM);

	/*
		1999.12.13 - Boldi
		A \n-eket is olvassuk be!
		(CIN != '\n') && 
	*/
	while ((CIN != -1) && (!error) && (!feof(STREAM))) {
		CurLen += (buf1) ? strlen(buf1)+(sizeof(char)*2) : sizeof(char)*2;

		if (buf1)
			buf2 = (char *)realloc(buf1, CurLen);
		else
			buf2 = (char *)calloc(CurLen, sizeof(char));
		
		
		
		error = (buf2 == NULL);
		
		if (!error) {
			buf1 = buf2;
			CurLen = strlen(buf1);
			buf1[CurLen] = CIN;
			buf1[CurLen+1] = 0;
			CIN = (char)fgetc(STREAM);
		}
	}

	if (buf1) {
		*LINEPTR = buf1;
		*N = strlen(buf1)+1;
		return strlen(buf1);
	} else
		return -1;
}
#endif

/*
	Az stdin-rol jovo sorokat olvassa, '\n' nelkul pakolja oket egy bufferbe.
 */
char *ReadStdIn()
{
	size_t Len=0;
	char *ReadBuf = NULL;
	char *Buf1=NULL, *Buf2=NULL;
	int clen=0;
	
	ssize_t buflen=0;
	int error=0;

	while ((buflen != -1) && !error) {
		buflen = getline(&ReadBuf, &Len, stdin);
		if (ReadBuf && ((int)buflen>-1)) {

			clen += (Buf1) ? (strlen(Buf1)+buflen) : ++buflen;
			
			Buf2 = realloc(Buf1, clen*sizeof(char));

			error = (Buf2 == NULL);
			if (!error) {
				if ( (size_t)clen == buflen) memset(Buf2, 0, clen*sizeof(char));
				Buf1 = strcat(Buf2, ReadBuf);
				ReadBuf = NULL;
				Buf2 = NULL;
			}
		}
		
	}
	return Buf1;
}

/*
	Parancssori argumentumlista feldolgozása, változók inicializálása
 */
int Init(int argc, char **argv) 
{
	int get_stdin = 1, c;
	char *url_decoded_data = NULL;
	char libver[10];
	int vl = 10;
	int cres;

	CryptoType = 1;
	KeyFilePath = strdup("./");
	verbose=0;
	urldecode=0;
	data = NULL;

	opterr = 1;

  while ((c = getopt (argc, argv, GETOPTIONS)) != -1)
    switch (c)
      {
      case 'c':
				CryptoType = atoi (optarg);
				break;
			case 'C':
				NullCrypto = 1;
				break;
			case 'd':
				mode = DECRYPT;
				break;
      case 'e':
				mode = ENCRYPT;
				break;
			case 'i': /*1999.11.23 Boldi*/
				KeyInfoMode = 1;
				break;
			case 'j': /* 1999.11.23 Boldi */
				ForceKeyInfo = 1;
				break;
			case 'h':
				usage();
				exit(10);
			case 'm': /* 1999.11.23 Boldi */
				if (MarketKeyId) free (MarketKeyId);
				MarketKeyId = strdup (optarg);
				break;
      case 'p':
				free(KeyFilePath);
				KeyFilePath = strdup (optarg);
				break;
			case 'v':
				verbose=1;
				break;
			case 's':
				get_stdin=0;
				data = strdup (optarg);
				break;
			case 'S':
				ekiSystemInfo();
				exit(0);
				break;
			case 'u':
				urldecode=1;
				break;
			case 'V':

				cres = ekiGetLibVersion(libver, &vl);
				if (cres != UER_OK)
					sprintf(libver, "ERROR!");
				printf("sakide %s.%s, %s, %s\nsakiCrypt version: %s\n", VERSION_MAJOR, VERSION_MINOR, MODIFIED, AUTHOR, libver);
				exit(0);
      case '?':
				return 21;
				break;
      }

  if (optind < argc) return 20;
	
	/* 1999.11.23 Boldi */
	if (! KeyInfoMode)
		{
			
			if (get_stdin)
				data = ReadStdIn();

			if (data && urldecode) {
				url_decoded_data = url_decode(data);
				free(data);

				data=url_decoded_data;
			}
		}
	else
			if (! MarketKeyId)
				return 4;
	
	/* 1999.11.23 Boldi */
	if ((data != NULL) || KeyInfoMode)
		return 0;
	else
		return 3;
}


void Done(int exitcode) 
{
	if (KeyFilePath) free(KeyFilePath);
	if (MarketKeyId) free(MarketKeyId);
	if (data) free(data);
	if (outdata) free(outdata);
	
	exit(exitcode);
	
}



// A lényeg: ez hivja az ekiCrypt libet.
int doCrypt()
{
	int cRes, // ekiCrypt eredménye
		OutLen = DataLen * 4; // az eredmény tárolására használt bufferméret. Ha ez nem eleg, akkor valamit nagyon elkeféltem.

	outdata=calloc(OutLen, sizeof(char));

	if (!outdata)
		return 30;
	
	if (verbose) fprintf(stderr, "%s...", ModeText[mode]);
	
	switch (mode) 
		{
		case ENCRYPT:
			cRes = ekiEncodeUrl (data, DataLen, outdata, &OutLen, CryptoType, KeyFilePath);
			break;
		case DECRYPT:

			/* printf("KP: \"%s\"\n", KeyFilePath); */
			if ((CryptoType == 3) && NullCrypto)
				// Különleges eset, a BOLT nem használja.
					cRes = ekiDecodeUrl (data, DataLen, outdata, &OutLen, NULL, KeyFilePath);
			else
				// Normális használat
				cRes = ekiDecodeUrl (data, DataLen, outdata, &OutLen, &CryptoType, KeyFilePath);
			break;
		}

	if (cRes == UER_OK) {
		if (verbose) fprintf(stderr, "Done.\nResult is %d byte(s).\n", OutLen);
		printf("%s", outdata);
	} else {
		if (verbose) fprintf(stderr, "An error occured. Response from sakiCrypt: \"%s (%d)\".\n", Response[abs(cRes)], cRes);
		cRes = 100  + abs(cRes);
	}

	return cRes;
}

/* Kulcsadatok lekérdezése */
/* 1999.11.23 Boldi */
int keyinfo()
{
	int cRes=0;  /* ekiKeyInfo eredménye */
	TKeyInfo ekiKeyInfo;

	cRes = ekiGetKeyInfo(&ekiKeyInfo, KeyFilePath, MarketKeyId);

	if (cRes != UER_OK)
		{
			if (verbose) fprintf(stderr, "\nAn error occured. Response from sakiCrypt: \"%s (%d)\".\n\n", Response[abs(cRes)], cRes);
			cRes = 100  + abs(cRes);
		} 

	if ((cRes == UER_OK) || (ForceKeyInfo && (cRes != 100 + abs(UER_NOFILE))))
		{
			printf("\nKey ID: %s\nKey path: %s\nKey size: %d\nID (internal): %s\nVersion: %d\nMarket ID (internal): %s\nCreation Time: %s\n\n", \
						 MarketKeyId, \
						 KeyFilePath,
						 ekiKeyInfo.keySize, \
						 ekiKeyInfo.id, \
						 ekiKeyInfo.version, \
						 ekiKeyInfo.marketId, \
						 ctime(&ekiKeyInfo.creation_time)
						 );
		} else if (ForceKeyInfo && (cRes == 100 + abs(UER_NOFILE))) {
			if (verbose) fprintf(stderr, "%s: Key does not exist.\n", MarketKeyId);
		}
	
	
	return cRes;
}


int
main (int argc, char **argv)
{
  int error = 0;

	error = Init(argc, argv);
	
	if (error) {
		if (verbose)
			switch (error) {
			case 30:
				fprintf(stderr, "Out of memory.\n");
				break;
			case 20:
				fprintf(stderr, "Invalid data.\n");
				break;
			case 21:
				fprintf(stderr, "Invalid parameter.\n");
				break;
			case 1:
				fprintf(stderr, "Invalid parameter.\n");
				break;
			case 2:
				fprintf(stderr, "Too many parameter.\n");
				break;
			case 3:
				fprintf(stderr, "Data error.\n");
				break;

/* 1999.11.23 Boldi */
			case 4:
				fprintf(stderr, "Too few arguments. Use -m.\n");
				break;
			}
		Done(error);
	}
	
	/* 1999.11.23 Boldi */
	if (KeyInfoMode)
		Done(keyinfo());
	else
		{
			DataLen = strlen (data);

			if (verbose) {
				fprintf (stderr, "\nEKI Decrypt/Encrypt commandline encryption tool for IEB EKI 1.0\n\nOperation mode: \"%s\".\nProcessing data: \"%s\".\nData is %d byte(s).\nCrypto mode is %d, may override by data.\nEstimated output length is %d byte(s).\n", ModeText[mode], data, DataLen, CryptoType, (DataLen*ENC_BUFLEN));
			}
			Done(doCrypt());
		}
	
	return 0;
	
}
