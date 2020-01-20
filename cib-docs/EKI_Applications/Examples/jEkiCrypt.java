package jEkiCrypt;

/*
 * jEkiCrypt demo utility
 *
 * CIB Bank Zrt. 2015 ecommerce@cib.hu
 *
 * This utility is part of EKI protocol documentation and provided AS IS.
 *
 * USAGE (if compiled as executable jar): JAVA -jar jEkiCrypt.jar <direction> <string_to_process>
 *       <direction> must be one of "-e" (encrypt) or "-d" (decrypt)
 *
 * 3rd party references:
 *   The source code imports Apache Commons Codec and IO libraries, available under Apache Licence from
 *   http://www.java2s.com
 */

import java.io.*;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.spec.InvalidKeySpecException;
import java.util.regex.*;
import java.util.zip.CRC32;
import java.util.zip.Checksum;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.ByteBuffer;
import java.nio.file.Paths;
import java.nio.file.Files;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.HexDump;

public class JEkiCrypt {

	private static void ekiEncode(String cleartext) throws NoSuchAlgorithmException, NoSuchPaddingException, IOException, InvalidKeyException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException, NoSuchProviderException, InvalidKeySpecException {
		String ciphertext = "";
		String pid = null;
		System.out.println(); System.out.println("Input string: " + cleartext);
		System.out.println();
    	HexDump.dump(cleartext.getBytes(), 0, System.out, 0);
		String[] ekiparams = cleartext.split("&");
		// Strip CRYPTO and get PID
		for (String ekiparam: ekiparams) {
            if (!ekiparam.equalsIgnoreCase("CRYPTO=1"))
                ciphertext += "&" + ekiparam;
            if (ekiparam.substring(0, 4).equalsIgnoreCase("PID="))
                pid = ekiparam.substring(4, 11);
		}
		ciphertext = ciphertext.substring(1);
		System.out.println(); System.out.println("Input string without CRYPTO:");
    	HexDump.dump(ciphertext.getBytes(), 0, System.out, 0);
		// URL encode
		ciphertext = URLEncoder.encode(ciphertext, "ISO-8859-1");
        ciphertext = ciphertext.replaceAll("%3D", "=").replaceAll("%3d", "=").replaceAll("%26", "&");
        Matcher m = Pattern.compile("%[a-f0-9]{2}").matcher(ciphertext);
        StringBuffer sb = new StringBuffer();
        while (m.find()) {
            m.appendReplacement(sb, m.group().toUpperCase());
        }
        m.appendTail(sb);
        ciphertext = sb.toString();
		System.out.println(); System.out.println("After URL encoding:");
    	HexDump.dump(ciphertext.getBytes(), 0, System.out, 0);
        // Calculate and append CRC32
        Checksum checksum = new CRC32();
        byte[] cipherarray = ciphertext.getBytes("US-ASCII");
        checksum.update(cipherarray, 0, cipherarray.length);
        int crc32 = (int) checksum.getValue();
        ByteBuffer bb = ByteBuffer.allocate(4);
        bb.putInt(crc32);
        byte[] crcarray = bb.array();
		System.out.println(); System.out.println("CRC32:");
    	HexDump.dump(crcarray, 0, System.out, 0);
        ciphertext = new String(cipherarray)+new String(crcarray);
		System.out.println(); System.out.println("After adding CRC32:");
    	HexDump.dump(ciphertext.getBytes(), 0, System.out, 0);
        // Pad length to mod8 not needed because of PKCS5Padding, skipping
        // 3DES
        final byte[] keyarray = Files.readAllBytes(Paths.get(pid.substring(0, 3) + ".des"));
        final byte[] key1bytes = new byte[8];
        final byte[] key2bytes = new byte[8];
        final byte[] keybytes = new byte[24];
        final byte[] ivbytes = new byte[8];
        System.arraycopy(keyarray, 14, key1bytes, 0, 8);
        System.arraycopy(keyarray, 22, key2bytes, 0, 8);
        System.arraycopy(keyarray, 30, ivbytes, 0, 8);
        System.arraycopy(key1bytes, 0, keybytes, 0, 8);
        System.arraycopy(key2bytes, 0, keybytes, 8, 8);
        System.arraycopy(key1bytes, 0, keybytes, 16, 8);
		System.out.println(); System.out.println("Key1:");
    	HexDump.dump(key1bytes, 0, System.out, 0);
		System.out.println(); System.out.println("Key2:");
    	HexDump.dump(key2bytes, 0, System.out, 0);
		System.out.println(); System.out.println("IV:");
    	HexDump.dump(ivbytes, 0, System.out, 0);
		System.out.println(); System.out.println("Full key:");
    	HexDump.dump(keybytes, 0, System.out, 0);
    	final Cipher cipher = Cipher.getInstance("DESede/CBC/PKCS5Padding");
    	cipher.init(Cipher.ENCRYPT_MODE, new SecretKeySpec(keybytes, "DESede"), new IvParameterSpec(ivbytes));
    	byte[] cipherTextBytes = cipher.doFinal(ciphertext.getBytes());
    	// Must use byte[] while not Base64, because getBytes() will crunch some characters!!!
		System.out.println(); System.out.println("After 3DES (byte):");
    	HexDump.dump(cipherTextBytes, 0, System.out, 0);
    	// Pad length to mod3
        int pad3 = 3 - (cipherTextBytes.length % 3);
        byte[] cipherTextBytesPadded = new byte[cipherTextBytes.length + pad3];
        System.arraycopy(cipherTextBytes, 0, cipherTextBytesPadded, 0, cipherTextBytes.length);
        for (int i = 0; i < pad3; i++) {
        	cipherTextBytesPadded[cipherTextBytes.length+i] = (byte)pad3;
        }
		System.out.println(); System.out.println("After padding for Base64:");
    	HexDump.dump(cipherTextBytesPadded, 0, System.out, 0);
        // Base64
        ciphertext = new String(Base64.encodeBase64(cipherTextBytesPadded));
		System.out.println(); System.out.println("After Base64:");
    	HexDump.dump(ciphertext.getBytes(), 0, System.out, 0);
        // URL encode
		ciphertext = URLEncoder.encode(ciphertext, "ISO-8859-1");
        ciphertext = ciphertext.replaceAll("%3D", "=").replaceAll("%3d", "=").replaceAll("%26", "&");
        StringBuffer sb2 = new StringBuffer();
        m = Pattern.compile("%[a-f0-9]{2}").matcher(ciphertext);
        while (m.find()) {
            m.appendReplacement(sb2, m.group().toUpperCase());
        }
        m.appendTail(sb2);
        ciphertext = new String(sb2);
		System.out.println(); System.out.println("After URL encoding:");
    	HexDump.dump(ciphertext.getBytes(), 0, System.out, 0);
        // Assemble full ciphertext
        ciphertext = "PID=" + pid + "&CRYPTO=1&DATA=" + ciphertext;
		System.out.println(); System.out.println("After assembling full message:");
    	HexDump.dump(ciphertext.getBytes(), 0, System.out, 0);
    	System.out.println(); System.out.println("Output string: "+ciphertext);
	}

	private static void ekiDecode(String ciphertext) throws ArrayIndexOutOfBoundsException, IllegalArgumentException, IOException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
		String cleartext = "";
		String pid = null;
		System.out.println(); System.out.println("Input string: " + ciphertext);
		System.out.println();
    	HexDump.dump(ciphertext.getBytes(), 0, System.out, 0);
    	// Get PID and DATA values
        String[] ekiparams = ciphertext.split("&");
		for (String ekiparam: ekiparams) {
            if (ekiparam.substring(0, 5).equalsIgnoreCase("DATA="))
                ciphertext = ekiparam.substring(5);
            if (ekiparam.substring(0, 4).equalsIgnoreCase("PID="))
                pid = ekiparam.substring(4, 7);
        }
		// Url decoding
		ciphertext = ciphertext.replaceAll("\\+", "%2B").replaceAll("/", "%2F");
		ciphertext = URLDecoder.decode(ciphertext, "ISO-8859-1");
		System.out.println(); System.out.println("After URL decoding:");
    	HexDump.dump(ciphertext.getBytes(), 0, System.out, 0);
        // Base64
    	byte[] cipherTextBytesPadded = Base64.decodeBase64(ciphertext.getBytes());
		System.out.println(); System.out.println("After Base64:");
    	HexDump.dump(cipherTextBytesPadded, 0, System.out, 0);
        // Unpad
        boolean validpad = true;
        int lastc = cipherTextBytesPadded[cipherTextBytesPadded.length - 1];
        for (int i = 0; i < lastc; i++)
            if (cipherTextBytesPadded[cipherTextBytesPadded.length - i - 1] != lastc)
                validpad = false;
        byte[] cipherTextBytes = new byte[cipherTextBytesPadded.length - lastc];
        if (validpad) {
            System.arraycopy(cipherTextBytesPadded, 0, cipherTextBytes, 0, cipherTextBytesPadded.length - lastc);
        } else {
        	throw new ArrayIndexOutOfBoundsException();
        }
		System.out.println(); System.out.println("After Unpad:");
    	HexDump.dump(cipherTextBytes, 0, System.out, 0);
        // 3DES
        final byte[] keyarray = Files.readAllBytes(Paths.get(pid.substring(0, 3) + ".des"));
        final byte[] key1bytes = new byte[8];
        final byte[] key2bytes = new byte[8];
        final byte[] keybytes = new byte[24];
        final byte[] ivbytes = new byte[8];
        System.arraycopy(keyarray, 14, key1bytes, 0, 8);
        System.arraycopy(keyarray, 22, key2bytes, 0, 8);
        System.arraycopy(keyarray, 30, ivbytes, 0, 8);
        System.arraycopy(key1bytes, 0, keybytes, 0, 8);
        System.arraycopy(key2bytes, 0, keybytes, 8, 8);
        System.arraycopy(key1bytes, 0, keybytes, 16, 8);
		System.out.println(); System.out.println("Key1:");
    	HexDump.dump(key1bytes, 0, System.out, 0);
		System.out.println(); System.out.println("Key2:");
    	HexDump.dump(key2bytes, 0, System.out, 0);
		System.out.println(); System.out.println("IV:");
    	HexDump.dump(ivbytes, 0, System.out, 0);
		System.out.println(); System.out.println("Full key:");
    	HexDump.dump(keybytes, 0, System.out, 0);
    	final Cipher cipher = Cipher.getInstance("DESede/CBC/PKCS5Padding");
    	cipher.init(Cipher.DECRYPT_MODE, new SecretKeySpec(keybytes, "DESede"), new IvParameterSpec(ivbytes));
    	byte[] plainTextBytesWithCRC = cipher.doFinal(cipherTextBytes);
		System.out.println(); System.out.println("After 3unDES (byte):");
    	HexDump.dump(plainTextBytesWithCRC, 0, System.out, 0);
        // CRC32 check
    	byte[] plainTextWithoutCRC = new byte[plainTextBytesWithCRC.length - 4];
    	System.arraycopy(plainTextBytesWithCRC, 0, plainTextWithoutCRC, 0, plainTextBytesWithCRC.length - 4);
        Checksum checksum = new CRC32();
        checksum.update(plainTextWithoutCRC, 0, plainTextWithoutCRC.length);
        int crc32computed = (int) checksum.getValue();
        ByteBuffer bb = ByteBuffer.allocate(4);
        bb.putInt(crc32computed);
        byte[] crc32computedBytes = bb.array();
		System.out.println(); System.out.println("Computed CRC32: ");
    	HexDump.dump(crc32computedBytes, 0, System.out, 0);
        byte[] crc32gotBytes = new byte[4];
        System.arraycopy(plainTextBytesWithCRC, plainTextBytesWithCRC.length - 4, crc32gotBytes, 0, 4);
		System.out.println(); System.out.println("Got CRC32: ");
    	HexDump.dump(crc32gotBytes, 0, System.out, 0);
        ByteBuffer bb2 = ByteBuffer.wrap(crc32gotBytes);
        int crc32got = bb2.getInt();
        if (crc32got == crc32computed) {
        	System.out.println(); System.out.println("CRC32 OK.");
        } else {
        	throw new ArrayIndexOutOfBoundsException();
        }
        // URL decoding
        cleartext = new String(plainTextWithoutCRC);
        cleartext = URLDecoder.decode(cleartext, "ISO-8859-1");
		System.out.println(); System.out.println("After URL decoding:");
    	HexDump.dump(ciphertext.getBytes(), 0, System.out, 0);
    	System.out.println(); System.out.println("Original message:" + cleartext);
	}

	public static void main(String[] args) throws InvalidKeyException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException, IOException, NoSuchProviderException, InvalidKeySpecException {
		/*
		 * Param #1: Crypto direction: -e (encrypt) or -d (decrypt)
		 * Param #2: Input string to process (must contain "PID=XXXYYYY" substring)
		 */

		if (args.length != 2) {
			System.err.println("USAGE: JEkiCrypt <-e|-d> <text_to_process>");
			System.exit(1);
		}

		String direction = args[0];
		String istr = args[1];

		if (istr.indexOf("PID=")==-1) {
			System.err.println("USAGE: JEkiCrypt <-e|-d> text_to_process>");
			System.exit(1);
		}

		switch (direction.toUpperCase()) {
			case "-E":	ekiEncode(istr);
						break;
			case "-D":	ekiDecode(istr);
						break;
			default:	System.err.println("undefined, exiting");
						break;
		}
	}
}
