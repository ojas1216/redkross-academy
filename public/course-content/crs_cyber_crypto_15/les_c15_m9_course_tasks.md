> [!NOTE] Lab kit
> Download the course lab kit: [RedKross_C15_Lab_Kit.zip](/downloads/labs/RedKross_C15_Lab_Kit.zip). Extract it anywhere; paths written as `LAB_ASSETS/C15/...` refer to the extracted `C15` folder. Everything runs locally against systems you own.
>
> **Before you start:** Private keys (*.key) are never shipped in the download. Before the Module 6 TLS lab, run the Module 5 PKI lab once to generate the lab CA, intermediate and server keys in pki/: sh m05_pki_lab.sh        (Linux/macOS, or Git Bash on Windows; needs OpenSSL 3) Then: python m06_tls.py (also in READ_ME_FIRST_DOWNLOAD_NOTES.txt inside the kit)

​## Task C15-CT1

**Review and rewrite:** a function stores API tokens as MD5(token) and encrypts customer notes with AES-CBC using IV = `b"0"*16` and key = SHA-256(app_name). List all weaknesses and write a corrected design (token storage, encryption, key management) with three tests.

​## Task C15-CT2 Using OpenSSL, create a root and intermediate CA and two leaf certificates (server and client with clientAuth). Show successful validation and three distinct failures, and explain each OpenSSL error code.
