# Wireshark实验：探究SSL (Page437)
1. 128.238.38.162, 216.75.194.220, 有包含 1 个、2 个、3 个的帧，版本有 sslv2 sslv3
2. content type 1 字节, version 2 字节, length 2 字节
3. 22
4. Random: 42dbf0c21b781c6c644b84fe4efa7be6ef21efc98e350355…
5. 非对称加密算法 rsa, 对称加密算法 rc4, 哈希算法 md5
6. 非对称加密算法 rsa, 对称加密算法 rc4, 哈希算法 md5
7. Random: 0000000042dbed263707fc0f473df2dbcc0cd768f9aa9902…, 32 字节, 用于生成主密钥(master key)的32字节的随机数(主密钥由客户端和服务端的随机数共同生成)
8. 包含，用于会话复用
9. 不包含，证书单独发送，从例子来看需要 3 个帧发送。
10. 包含，用来让服务器用私钥解密。
11. 告诉服务器我已经计算好加密密钥，以后会用商定的加密方式和密钥加密传输， 6 字节。
12. 消息校验码是加密的。

## 参考资料
* [SSL、TLS协议格式、HTTPS通信过程、RDP SSL通信过程](https://www.cnblogs.com/littlehann/p/3733469.html)
* 官方文档第六版：[Wireshark_SSL_v6.0.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-SSL/Wireshark_SSL_v6.0.pdf)
* 官方文档第七版：[Wireshark_SSL_v7.0.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-SSL/Wireshark_SSL_v7.0.pdf)
* 翻译：[Wireshark_SSL_v7.0_Simplified_Chinese.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-SSL/Wireshark_SSL_v7.0_Simplified_Chinese.pdf) （[CHN-STUDENT](https://github.com/chn-student) )
* 解答：[计算机网络实验-SSL.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-SSL/计算机网络实验-SSL.pdf)（ [CHN-STUDENT](https://github.com/chn-student) )