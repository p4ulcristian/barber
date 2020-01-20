/*
** ekiCrypt.h -- EKI Crypto DLL Header
** version 1.0.6
** (c) IEB, 1999.
*/

/*
   $Date$
   $Id$
	 $Name$
	 $Log$
	 $State$
*/

#ifndef _EKICRYPT_H
#define _EKICRYPT_H

#ifdef __cplusplus
extern "C" {
#endif

	//#define EKICRYPT_VERSION "1.0.5"

// define types
//
#ifdef P_WIN32
	#ifdef EXPORTS
		#define EKIAPI __declspec(dllexport)
	#else
		#define EKIAPI	__declspec(dllimport)
	#endif
	//#elif defined(P_AIX) || defined (P_LINUX) || defined (P_SUN)
	#include <time.h>
#elif defined(P_UNIX)
	#define EKIAPI
	#define LPINT	int *
	#define LPSTR	char *
	#define INT		int
  #define stricmp strcasecmp
#endif

// EKI error codes
//
#define UER_OK			 0
#define UER_NOKEY		-1
#define UER_NOFILE	-2
#define UER_BADPAD	-3
#define UER_BADPARM	-4
#define UER_NOMEM		-5
#define UER_BADSIZE	-6
#define UER_BADURL	-7
#define UER_CRC		-8
#define UER_BADKEY	-9								// version 1.0.2

// export function prototypes
//

/*
	1999.11.23.
  Boldi: kulcs info-k
*/

typedef struct 
{
	char fname[13];
	INT  keySize;
	char id[4];
	unsigned short version;
	char marketId[4];
	time_t creation_time;
} TKeyInfo;

	/* </Boldi> */

INT EKIAPI ekiEncodeUrl (LPSTR inBuffer, INT inBufferSize, LPSTR outBuffer, LPINT outBufferSize, INT cryptoType, LPSTR keyFilePath); 
INT EKIAPI ekiDecodeUrl (LPSTR inBuffer, INT inBufferSize, LPSTR outBuffer, LPINT outBufferSize, LPINT cryptoType, LPSTR keyFilePath); 
INT EKIAPI ekiGetKeyInfo(TKeyInfo *ekiKeyInfo, char *keyFilePath, char *boltId);
INT EKIAPI ekiGetLibVersion(char *outBuffer, LPINT outBufferSize);
	
	
#ifdef __cplusplus
}
#endif

#endif /* _EKICRYPT_H */
