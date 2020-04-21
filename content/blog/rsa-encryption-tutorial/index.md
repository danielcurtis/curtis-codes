---
title: RSA Encryption Tutorial
date: '2020-01-10T22:12:03.284Z'
tags: ['c', 'cybersecurity']
---

## Introduction to this tutorial series

I've been going through the SEED Labs to learn about different aspects of Cybersecurity. I couldn't find
many resources online so I thought I would write a tutorial series on these labs. This particular tutorial
follows the [RSA Public-Key Encryption and Signature Lab](https://seedsecuritylabs.org/Labs_16.04/PDF/Crypto_RSA.pdf).
RSA (Rivest–Shamir–Adleman) pioneered public-key cryptosystems and is widely implemented today. The RSA asymmetric algorithm generates two large, random prime-numbers and generates a key value pair of public and private keys. Encryption, decryption, and digital signatures verification use these keys. While completing this lab, I gained a deeper understanding of how the RSA algorithm works, as well as the paradigm of public and private keys in cryptosystems. The lab introduced both encryption and decryption as well as digital signatures which verify that the parties included in the key exchange are who they say they are.

## Setup

I ran the 16.04 Ubuntu virtual image that SEED Labs provides in Oracle VirtualBox because I'm working through all of their labs. However, this tutorial can easily be carried out on any machine. It requires GCC for C compilation, Python, OpenSSL, and the BIGNUMs API.

## Deriving the Private Key

The lab instructions linked above have six tasks to complete. The first is deriving a private key. We need to create a C program using the OpenSSL library and BIGNUMs API:

```c
#include <openssl/bn.h>
#include <stdio.h>
#define NBITS 256

void printBN(char *msg, BIGNUM *a) {
  // Use BN_bn2hex(a) for hex string
  // Use BN_bn2dec(a) for decimal string
  char *number_str = BN_bn2hex(a);
  printf("%s %s\n", msg, number_str);
  OPENSSL_free(number_str);
}

int main() {
  // init bignum variables
  BN_CTX *ctx = BN_CTX_new();
  BIGNUM *p = BN_new();
  BIGNUM *q = BN_new();
  BIGNUM *e = BN_new();
  BIGNUM *d = BN_new();
  BIGNUM *res1 = BN_new();
  BIGNUM *res2 = BN_new();
  BIGNUM *res3 = BN_new();
  BIGNUM *one = BN_new();

  // assign key values and exponent to variables
  BN_hex2bn(&p, "F7E75FDC469067FFDC4E847C51F452DF");
  BN_hex2bn(&q, "E85CED54AF57E53E092113E62F436F4F");
  BN_hex2bn(&e, "0D88C3");
  BN_dec2bn(&one, "1");

  // res1 = p - 1
  BN_sub(res1, p, one);

  // res2 = q - 1
  BN_sub(res2, q, one);

  // res3 = res1 * res2
  BN_mul(res3, res1, res2, ctx);

  // mod inverse ed mod res3 = 1
  BN_mod_inverse(d, e, res3, ctx);

  printBN("D = ", d);

  return 0;
}
```

I tried to explain the code above in the comments. Now we can run our program using GCC and the -lcrypto flag:

```bash
gcc main.c -lcrypto
```

The output file should return a private key!

## Encrypting a message

Now we can encrypt a message! I'm going to encrypt the message "A top secret!" First we need to translate the message from ASCII to hex which can be done using the following python:

```bash
python -c 'print("A top secret!".encode("hex))'
```

Now we can copy the hex and put it into our program. We also need to put the key from step one in our program. Then we need to add the encryption method (and the decryption method for fuN!).

```c
#include <openssl/bn.h>
#include <stdio.h>
#define NBITS 256

void printBN(char *msg, BIGNUM *a) {
  // Use BN_bn2hex(a) for hex string
  // Use BN_bn2dec(a) for decimal string
  char *number_str = BN_bn2hex(a);
  printf("%s %s\n", msg, number_str);
  OPENSSL_free(number_str);
}

int main() {
  // init bignum variables
  BN_CTX *ctx = BN_CTX_new();
  BIGNUM *m = BN_new();
  BIGNUM *e = BN_new();
  BIGNUM *n = BN_new();
  BIGNUM *d = BN_new();
  BIGNUM *enc = BN_new();
  BIGNUM *dec = BN_new();

  // Initialize m, e, n, d
  BN_hex2bn(&m, "4120746f702073656372657421");
  BN_hex2bn(&e, "010001");
  BN_hex2bn(&n,"DCBFFE3E51F62E09CE7032E2677A78946A849DC4CDDE3A4D0CB81629242FB1A5");
  BN_hex2bn(&d,"3587A24598E5F2A21DB007D89D18CC50ABA5075BA19A33890FE7C28A9B496AEB");
  BN_hex2bn(&enc,"8C0F971DF2F3672B28811407E2DABBE1DA0FEBBBDFC7DCB67396567EA1E2493F");

  // Encryption: m ^ e mod n
  BN_mod_exp(enc, m, e, n, ctx);
  printBN("Encryption msg = ", enc);

  // Decryption: enc ^ d mod n
  BN_mod_exp(dec, enc, d, n, ctx);
  printBN("Decrypted msg = ", dec);

  return 0;
}
```

We're transferring the hex to a big number and m^e modulus n to encrypt it. To decrypt our message, we use our encryption^d modulus n. The program should print both the encrypted and decrypted message. The decrypted message is in hex though, so we need to use Python to convert it back to ASCII:

```bash
python -c 'print("81FBB244C46543BBAA6960AAE17E77DAA3BB242FC7C80D493362C5F802C78481".decode("hex"))'
```

## Signing a message

Now that we've encrypted and decrypted messages, let's sign a message using the RSA algorithm. I'm going to use the message "I owe you $2000". I'm also going to encrypt "I owe you $3000".

First we need to translate those messages to hex using python:

```bash
python -c 'print(" I owe you $2000".encode("hex"))'
python -c 'print(" I owe you $3000".encode("hex"))'
```

Now copy the outputs. We'll modify the C program again in order to sign the messages and update it with the message hex.

```c
#include <openssl/bn.h>
#include <stdio.h>
#define NBITS 256

void printBN(char *msg, BIGNUM *a) {
  /* Use BN_bn2hex(a) for hex string
  * Use BN_bn2dec(a) for decimal string */
  char *number_str = BN_bn2hex(a);
  printf("%s %s\n", msg, number_str);
  OPENSSL_free(number_str);
}

int main() {
  BN_CTX *ctx = BN_CTX_new();
  BIGNUM *m1 = BN_new();
  BIGNUM *m2 = BN_new();
  BIGNUM *e = BN_new();
  BIGNUM *n = BN_new();
  BIGNUM *d = BN_new();
  BIGNUM *s1 = BN_new();
  BIGNUM *s2 = BN_new();

  // Initialize m1, m2, e, n, d
  BN_hex2bn(&m1, "49206f776520796f75202432303030"); // $2000
  BN_hex2bn(&m2, "49206f776520796f75202433303030"); // $3000
  BN_hex2bn(&e, "010001");
  BN_hex2bn(&n,"DCBFFE3E51F62E09CE7032E2677A78946A849DC4CDDE3A4D0CB81629242FB1A5");
  BN_hex2bn(&d,"3587A24598E5F2A21DB007D89D18CC50ABA5075BA19A33890FE7C28A9B496AEB");

  // Sign messages
  BN_mod_exp(s1, m1, d, n, ctx);
  BN_mod_exp(s2, m2, d, n, ctx);
  printBN("sign 1 = ", s1);
  printBN("sign 2 = ", s2);

  return 0;
}
```

As you can see, the code remains virtually the same except the decrypt and encrypt methods and variables are taken out. Now we can run the program and we should get two signed messages. But the signed message doens't mean much if we can't verify it.

Let's say we recieve a message with a signature. We can verify it using the senders public key, signature, and hex from the message. Let's say Alice sends Bob (gotta stay original) "Launch a missile". We're Bob. We need to verify it. Alice's public key and signature are below:

```
signature = 643D6F34902D9C7EC90CB0B2BCA36C47FA37165C0005CAB026C0542CBDB6802F
e = 010001 (or 65537 in decimal)
n = AE1CD4DC432798D933779FBD46C6E1247F0CF1233595113AA51B450F18116115
```

We just need to generate the hex from the python, and plug Alice's info into our C program.

```bash
python -c 'print("Launch a missile".encode("hex"))'
```

And now for the C:

```c
#include <openssl/bn.h>
#include <stdio.h>
#define NBITS 256

void printBN(char *msg, BIGNUM *a) {
  /* Use BN_bn2hex(a) for hex string
  * Use BN_bn2dec(a) for decimal string */
  char *number_str = BN_bn2hex(a);
  printf("%s %s\n", msg, number_str);
  OPENSSL_free(number_str);
}

int main() {
  BN_CTX *ctx = BN_CTX_new();
  BIGNUM *e = BN_new();
  BIGNUM *n = BN_new();
  BIGNUM *v = BN_new();
  BIGNUM *m = BN_new();
  BIGNUM *s = BN_new();

  // Initialize v, e, n, s
  BN_hex2bn(&n, "AE1CD4DC432798D933779FBD46C6E1247F0CF1233595113AA51B450F18116115");
  BN_hex2bn(&e, "010001");
  BN_hex2bn(&s, "643D6F34902D9C7EC90CB0B2BCA36C47FA37165C0005CAB026C0542CBDB6802F");
  BN_hex2bn(&v, "4c61756e63682061206d697373696c652e");

  // Verify signature
  BN_mod_exp(m, s, e, n, ctx);

  printf("%s\n", BN_cmp(v, m) == 0 ? "launch success" : "launch fail");

  return 0;
}
```

I throw in a conditional based on the verification of the signature. Now when we run it we can see that the launch was a success! If we change the signature the launch should fail because it wouldn't be valid anymore.

I hope you learned as much as I did about the big numbers, asymetric cryptography, and the OpenSSL library as I did from this lab. I'll be continuing this series with either a post on how to manually verify a x509 certificate or on symmetric encryption.
