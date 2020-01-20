using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System.Web;


/*
 * csEkiCrypt demo utility
 *
 * CIB Bank Zrt. 2015 ecommerce@cib.hu
 *
 * This utility is part of EKI protocol documentation and provided AS IS.
 *
 * USAGE: csEkiCrypt <direction> <string_to_process>
 *       <direction> must be one of "-e" (encrypt) or "-d" (decrypt)
 *
 * The code makes use of the following standard references:
 *   System.Data
 *   System.DataSetExtensions
 *   System.Security
 *   System.Web
 *   System.Xml
 *   System.Xml.Linq
 * 3rd party references:
 *   The CRC32 method uses the implementation of user2136076 in http://stackoverflow.com/questions/4656659/how-to-calculate-crc-value-for-a-file-in-c-net
 *   The HexDump method uses the (slightly modified) implementation of Pascal Ganaye in http://www.codeproject.com/Articles/36747/Quick-and-Dirty-HexDump-of-a-Byte-Array
 *   
 */

namespace csEkiCrypt
{
    class Program
    {
        public static byte[] GetKey(string marketid)
        {
            string keyfilename = Directory.GetCurrentDirectory() + "\\" + marketid + ".des";
            byte[] bytes = File.ReadAllBytes(keyfilename);
            Console.WriteLine("Key file:");
            Console.WriteLine(HexDump(bytes));
            Console.WriteLine("Key file \"" + keyfilename + "\" contains " + bytes.Length + " bytes.\n");
            byte[] ekikey = bytes.Skip(14).Take(24).ToArray();
            byte[] key1 = ekikey.Take(8).ToArray();
            Console.WriteLine("Key1:");
            Console.WriteLine(HexDump(key1, 8));
            byte[] key2 = ekikey.Skip(8).Take(8).ToArray();
            Console.WriteLine("Key2:");
            Console.WriteLine(HexDump(key2, 8));
            byte[] iv = ekikey.Skip(16).Take(8).ToArray();
            Console.WriteLine("IV:");
            Console.WriteLine(HexDump(iv, 8));
            return ekikey;
        }

        public static uint CRC32(byte[] pBuf)
        {
            // Table of CRC-32's of all single byte values
            uint[] crctab = new uint[] {
          0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419,
          0x706af48f, 0xe963a535, 0x9e6495a3, 0x0edb8832, 0x79dcb8a4,
          0xe0d5e91e, 0x97d2d988, 0x09b64c2b, 0x7eb17cbd, 0xe7b82d07,
          0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de,
          0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856,
          0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9,
          0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4,
          0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b,
          0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3,
          0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a,
          0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599,
          0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924,
          0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190,
          0x01db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f,
          0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0x0f00f934, 0x9609a88e,
          0xe10e9818, 0x7f6a0dbb, 0x086d3d2d, 0x91646c97, 0xe6635c01,
          0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed,
          0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950,
          0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3,
          0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2,
          0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a,
          0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5,
          0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010,
          0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f,
          0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17,
          0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6,
          0x03b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x04db2615,
          0x73dc1683, 0xe3630b12, 0x94643b84, 0x0d6d6a3e, 0x7a6a5aa8,
          0xe40ecf0b, 0x9309ff9d, 0x0a00ae27, 0x7d079eb1, 0xf00f9344,
          0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb,
          0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a,
          0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5,
          0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1,
          0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c,
          0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef,
          0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236,
          0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe,
          0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31,
          0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c,
          0x026d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x05005713,
          0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38, 0x92d28e9b,
          0xe5d5be0d, 0x7cdcefb7, 0x0bdbdf21, 0x86d3d2d4, 0xf1d4e242,
          0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1,
          0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c,
          0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278,
          0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7,
          0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66,
          0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9,
          0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605,
          0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8,
          0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b,
          0x2d02ef8d
        };

            uint c = 0xffffffff;  // begin at shift register contents 
            int i, n = pBuf.Length;
            for (i = 0; i < n; i++)
            {
                c = crctab[((int)c ^ pBuf[i]) & 0xff] ^ (c >> 8);
            }
            return c ^ 0xffffffff;
        }

        public static string HexDump(byte[] bytes, int bytesPerLine = 16)
        {
            if (bytes == null) return "<null>";
            int bytesLength = bytes.Length;

            char[] HexChars = "0123456789ABCDEF".ToCharArray();

            int firstHexColumn =
                  8                   // 8 characters for the address
                + 3;                  // 3 spaces

            int firstCharColumn = firstHexColumn
                + bytesPerLine * 3       // - 2 digit for the hexadecimal value and 1 space
                + (bytesPerLine - 1) / 8 // - 1 extra space every 8 characters from the 9th
                + 2;                  // 2 spaces 

            int lineLength = firstCharColumn
                + bytesPerLine           // - characters to show the ascii value
                + Environment.NewLine.Length; // Carriage return and line feed (should normally be 2)

            char[] line = (new String(' ', lineLength - 2) + Environment.NewLine).ToCharArray();
            int expectedLines = (bytesLength + bytesPerLine - 1) / bytesPerLine;
            StringBuilder result = new StringBuilder(expectedLines * lineLength);

            for (int i = 0; i < bytesLength; i += bytesPerLine)
            {
                line[0] = HexChars[(i >> 28) & 0xF];
                line[1] = HexChars[(i >> 24) & 0xF];
                line[2] = HexChars[(i >> 20) & 0xF];
                line[3] = HexChars[(i >> 16) & 0xF];
                line[4] = HexChars[(i >> 12) & 0xF];
                line[5] = HexChars[(i >> 8) & 0xF];
                line[6] = HexChars[(i >> 4) & 0xF];
                line[7] = HexChars[(i >> 0) & 0xF];

                int hexColumn = firstHexColumn;
                int charColumn = firstCharColumn;

                for (int j = 0; j < bytesPerLine; j++)
                {
                    if (j > 0 && (j & 7) == 0) hexColumn++;
                    if (i + j >= bytesLength)
                    {
                        line[hexColumn] = ' ';
                        line[hexColumn + 1] = ' ';
                        line[charColumn] = ' ';
                    }
                    else
                    {
                        byte b = bytes[i + j];
                        line[hexColumn] = HexChars[(b >> 4) & 0xF];
                        line[hexColumn + 1] = HexChars[b & 0xF];
                        line[charColumn] = ((b < 0x20 || b > 0x7F) ? '.' : (char)b);
                    }
                    hexColumn += 3;
                    charColumn++;
                }
                result.Append(line);
            }
            return result.ToString();
        }

        static byte[] Unicode2ASCII(byte[] unicodeBytes)
        {
            byte[] asciiBytes = new byte[unicodeBytes.Count() / 2];
            for (int i = 0; i < asciiBytes.Count(); i++)
                asciiBytes[i] = unicodeBytes[i * 2];
            return asciiBytes;
        }

        static byte[] GetBytes(string str)
        {
            byte[] bytes = new byte[str.Length * sizeof(char)];
            System.Buffer.BlockCopy(str.ToCharArray(), 0, bytes, 0, bytes.Length);
            return bytes;
        }

        static string GetString(byte[] bytes)
        {
            char[] chars = new char[bytes.Length];
            for (int i = 0; i < bytes.Length; i++)
            {
                chars[i] = (char)bytes[i];
            }
            return new string(chars);
        }

        static void ekiEncode(string cleartext)
        {
            string ciphertext = "";
            string pid = "";
            string[] ekiparams = cleartext.Split('&');
            Console.WriteLine("Input string:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(cleartext))));
            // Strip CRYPTO and get PID
            foreach (string ekiparam in ekiparams)
            {
                if (ekiparam.ToUpper() != "CRYPTO=1")
                    ciphertext += "&" + ekiparam;
                if (ekiparam.Substring(0, 4).ToUpper() == "PID=")
                    pid = ekiparam.Substring(4, 7);
            }
            ciphertext = ciphertext.Substring(1);
            Console.WriteLine("Input string without CRYPTO:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
			// URL encode
            ciphertext = HttpUtility.UrlEncode(ciphertext, Encoding.ASCII);
            ciphertext = ciphertext.Replace("%3D", "=").Replace("%3d", "=");
            ciphertext = ciphertext.Replace("%26", "&");
            Regex reg = new Regex(@"%[a-f0-9]{2}");
            ciphertext = reg.Replace(ciphertext, m => m.Value.ToUpperInvariant());
            Console.WriteLine("After URL encoding:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // Calculate and append CRC32
            string crc32s = CRC32(Unicode2ASCII(GetBytes(ciphertext))).ToString("X8");
            Console.WriteLine("CRC32: " + crc32s);
            for (int i = 0; i < 4; i++)
                ciphertext += (char)(Convert.ToUInt32(crc32s.Substring(i * 2, 2), 16));
            Console.WriteLine("After adding CRC32:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // Pad length to mod8
            int pad = 8 - (ciphertext.Length % 8);
            for (int i = 0; i < pad; i++)
                ciphertext += (char)(pad);
            Console.WriteLine("After padding for 3DES:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // 3DES
            byte[] keys = GetKey(pid.Substring(0, 3));
            byte[] key1 = keys.Take(8).ToArray();
            Console.WriteLine("KEY:\n");
            Console.WriteLine(HexDump(keys, 8));
            byte[] key2 = keys.Skip(8).Take(8).ToArray();
            byte[] key = key1.Concat(key2).Concat(key1).ToArray();
            byte[] iv = keys.Skip(16).Take(8).ToArray();
            TripleDES des = TripleDES.Create();
            des.Key = key;
            des.IV = iv;
            des.Mode = CipherMode.CBC;
            ICryptoTransform ic = des.CreateEncryptor();
            byte[] cb = new byte[0];
            cb = ic.TransformFinalBlock(Unicode2ASCII(GetBytes(ciphertext)), 0, ciphertext.Length).Take(ciphertext.Length).ToArray();
            ciphertext = GetString(cb);
            Console.WriteLine("After 3DES:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // Pad length to mod3
            pad = 3 - (ciphertext.Length % 3);
            for (int i = 0; i < pad; i++)
                ciphertext += (char)(pad);
            Console.WriteLine("After padding for Base64:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // Base64
            ciphertext = Convert.ToBase64String(Unicode2ASCII(GetBytes(ciphertext)));
            Console.WriteLine("After Base64:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // URL encode
            ciphertext = HttpUtility.UrlEncode(ciphertext, Encoding.ASCII);
            ciphertext = ciphertext.Replace("%3D", "=").Replace("%3d", "=");
            ciphertext = ciphertext.Replace("%26", "&");
            ciphertext = reg.Replace(ciphertext, m => m.Value.ToUpperInvariant());
            Console.WriteLine("After URL encoding:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // Assemble full ciphertext
            ciphertext = "PID=" + pid + "&CRYPTO=1&DATA=" + ciphertext;
            Console.WriteLine("After assembling full message:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            Console.WriteLine("Output string: " + ciphertext);
        }

        static void ekiDecode(string ciphertext)
        {
            string cleartext = "";
            string pid = "";
            string[] ekiparams = ciphertext.Split('&');
            Console.WriteLine("Input string:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // Get PID and DATA values
            foreach (string ekiparam in ekiparams)
            {
                if (ekiparam.Substring(0, 5).ToUpper() == "DATA=")
                    ciphertext = ekiparam.Substring(5);
                if (ekiparam.Substring(0, 4).ToUpper() == "PID=")
                    pid = ekiparam.Substring(4, 7);
            }
            // Url decoding
            ciphertext = HttpUtility.UrlDecode(ciphertext, Encoding.ASCII);
            ciphertext = ciphertext.Replace("=", "%3D");
            ciphertext = ciphertext.Replace("&", "%26");
            Console.WriteLine("After URL decoding:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // Base64
            ciphertext = GetString(Convert.FromBase64String(ciphertext));
            Console.WriteLine("After Base64 decode:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // Unpad
            bool validpad = true;
            int lastc = ciphertext[ciphertext.Length - 1];
            for (int i = 0; i < lastc; i++)
                if (ciphertext[ciphertext.Length - i - 1] != lastc)
                    validpad = false;
            if (validpad)
                ciphertext = ciphertext.Substring(0, ciphertext.Length - lastc);
            Console.WriteLine("After unpad:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // 3DES
            byte[] keys = GetKey(pid.Substring(0, 3));
            byte[] key = keys.Take(16).ToArray();
            byte[] iv = keys.Skip(16).Take(8).ToArray();
            TripleDES des = TripleDES.Create();
            des.Key = key;
            des.IV = iv;
            des.Mode = CipherMode.CBC;
            ICryptoTransform ic = des.CreateDecryptor();
            byte[] cb = new byte[0];
            cb = ic.TransformFinalBlock(Unicode2ASCII(GetBytes(ciphertext)), 0, ciphertext.Length);
            ciphertext = GetString(cb);
            Console.WriteLine("After 3unDES:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            Console.WriteLine("String length: " + ciphertext.Length.ToString());
            // CRC32 check
            string crc32o = ciphertext.Substring(ciphertext.Length - 4, 4);
            ciphertext = ciphertext.Substring(0, ciphertext.Length - 4);
            string crc32s = CRC32(Unicode2ASCII(GetBytes(ciphertext))).ToString("X8");
            string crcc = "";
            for (int i = 0; i < 4; i++)
                crcc += ((byte)crc32o[i]).ToString("X2");
            Console.WriteLine("Original CRC32: " + crcc);
            Console.WriteLine("Hashed CRC32: " + crc32s);
            if (crcc != crc32s)
            {
                Console.WriteLine("CRCs do not match, exiting.");
                return;
            }
            Console.WriteLine("CRC OK.");
            Console.WriteLine("After removing CRC32:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            // URL decoding
            ciphertext = HttpUtility.UrlDecode(ciphertext, Encoding.ASCII);
            Console.WriteLine("After URL decoding:");
            Console.WriteLine(HexDump(Unicode2ASCII(GetBytes(ciphertext))));
            cleartext = ciphertext;
            Console.WriteLine("Original message: " + cleartext);
        }

        static void Main(string[] args)
        {
            string dir = args[0].ToString().ToUpper();
            string istr = args[1];
            Console.WriteLine("Input string: " + istr);
            Console.Write("Coding direction: ");
            switch (dir)
            {
                case "-E":
                    Console.WriteLine("encode");
                    ekiEncode(istr);
                    break;
                case "-D":
                    Console.WriteLine("decode");
                    ekiDecode(istr);
                    break;
                default:
                    Console.WriteLine("undefined, exiting");
                    return;
            }
        }
    }
}
