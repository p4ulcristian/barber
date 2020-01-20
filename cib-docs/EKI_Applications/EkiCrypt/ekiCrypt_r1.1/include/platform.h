/*
** platform.h -- Identify which platform is used
** version 1.0.0
** (c) IEB, 1999.
**
** supported platforms:
**
**			Windows NT, Windows 95, Windows 98 -- Visual C++ compiler
**			AIX on IBM RS/6000 -- GNU C compiler
**			SUN Solaris -- GNU C compiler
**			Linux -- GNU C compiler, glibc, glibc2
*/

/*
  $Date: 1999/12/14 12:17:37 $
  $Id: platform.h,v 1.3 1999/12/14 12:17:37 szt48 Exp $
  $Name:  $
  $Log: platform.h,v $
  Revision 1.3  1999/12/14 12:17:37  szt48


  1.1-es sakiCrypt !

  - sakiCrypt.c:
      régi formatUrl -> urlencode
      Új formatUrl, korrekt urlencode-olás miatt
      ekiEncodeUrl-ben inBufEnc és inBufEncSize változók bevezetése inBuffer használata helyett
      új függvény: ekiGetLibVersion
  - Makefile módosítások (sakide fordítása)
  - install script módosítás
  - history.txt helyett rendes ChangeLog

  $State: Exp $
*/

#ifndef _PLATFORM_H
#define _PLATFORM_H

#ifdef __cplusplus
extern "C" {
#endif

// Select platform (machine and compiler)
//

#if defined (unix) || (_GNUC_) || defined (__GNUC__)
#ifdef AIX
		#define P_AIX				// GNU C compiler on AIX (IBM RS/6000)
#elif defined (__linux__)
		#define P_LINUX			// GNU C compiler on Linux (PC)
#elif defined(__sun__)
	  #define P_SUN
#elif defined(sgi)
    #define P_SGI
#elif defined(__OpenBSD__)
	#define P_BSD
#else
		#error Non-supported platform/compiler
#endif

#elif defined(_MSC_VER)
	#ifdef _WIN32
		#define P_WIN32			// Visual C++ compiler on WIN32 (PC)
	#else
		#error Non-supported platform/compiler
	#endif
#endif

#if defined(P_AIX) || defined (P_LINUX) || defined (P_SUN) || defined (P_SGI) || defined (P_BSD)
#define P_UNIX
#endif

// identify byte order
//
#if !defined(__BYTE_ORDER) && !defined(__BYTE_ORDER__)  && !defined(BYTE_ORDER) && !defined(_BYTE_ORDER)
	#define	__LITTLE_ENDIAN	1234
	#define	__BIG_ENDIAN	4321
	#define	__PDP_ENDIAN	3412
	#define __BYTE_ORDER __LITTLE_ENDIAN
	#define	LITTLE_ENDIAN	__LITTLE_ENDIAN
	#define	BIG_ENDIAN	__BIG_ENDIAN
	#define	PDP_ENDIAN	__PDP_ENDIAN
	#define	BYTE_ORDER	__BYTE_ORDER
#elif !defined(BYTE_ORDER)
	#if defined(__BYTE_ORDER)
		#define BYTE_ORDER __BYTE_ORDER
		#define BIG_ENDIAN __BIG_ENDIAN
		#define LITTLE_ENDIAN __LITTLE_ENDIAN
	#elif defined(__BYTE_ORDER__)
		#define BYTE_ORDER __BYTE_ORDER__
		#define BIG_ENDIAN __BIG_ENDIAN__
		#define LITTLE_ENDIAN __LITTLE_ENDIAN__
	#endif
#endif

#ifdef __cplusplus
}
#endif

#endif /* _PLATFORM_H */
