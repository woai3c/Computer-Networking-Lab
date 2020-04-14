# Wireshark实验：DNS (Page121)
#### 4. 找到DNS查询和响应消息。它们是否通过UDP或TCP发送？
UDP
#### 5. DNS查询消息的目标端口是什么？ DNS响应消息的源端口是什么？
1. 53
2. 53
#### 6. DNS查询消息发送到哪个IP地址？使用ipconfig来确定本地DNS服务器的IP地址。这两个IP地址是否相同？
192.168.0.1 相同
#### 7. 检查DNS查询消息。DNS查询是什么"Type"的？查询消息是否包含任何"answers"？
1. type A
2. `Answer RRs`
#### 8. 检查DNS响应消息。提供了多少个"answers"？这些答案具体包含什么？
5 个
```
Answers
    www.ietf.org: type CNAME, class IN, cname www.ietf.org.cdn.cloudflare.net
        Name: www.ietf.org
        Type: CNAME (Canonical NAME for an alias) (5)
        Class: IN (0x0001)
        Time to live: 1 (1 second)
        Data length: 33
        CNAME: www.ietf.org.cdn.cloudflare.net
    www.ietf.org.cdn.cloudflare.net: type A, class IN, addr 104.20.1.85
        Name: www.ietf.org.cdn.cloudflare.net
        Type: A (Host Address) (1)
        Class: IN (0x0001)
        Time to live: 1 (1 second)
        Data length: 4
        Address: www.ietf.org.cdn.cloudflare.net (104.20.1.85)
    www.ietf.org.cdn.cloudflare.net: type A, class IN, addr 104.20.0.85
        Name: www.ietf.org.cdn.cloudflare.net
        Type: A (Host Address) (1)
        Class: IN (0x0001)
        Time to live: 1 (1 second)
        Data length: 4
        Address: www.ietf.org.cdn.cloudflare.net (104.20.0.85)
```
```
Answers
    analytics.ietf.org: type CNAME, class IN, cname ietf.org
        Name: analytics.ietf.org
        Type: CNAME (Canonical NAME for an alias) (5)
        Class: IN (0x0001)
        Time to live: 1800 (30 minutes)
        Data length: 2
        CNAME: ietf.org
    ietf.org: type A, class IN, addr 4.31.198.44
        Name: ietf.org
        Type: A (Host Address) (1)
        Class: IN (0x0001)
        Time to live: 1800 (30 minutes)
        Data length: 4
        Address: ietf.org (4.31.198.44)
```
#### 9. 考虑从您主机发送的后续TCP SYN数据包。 SYN数据包的目的IP地址是否与DNS响应消息中提供的任何IP地址相对应？
IP `104.20.1.85` 与 `www.ietf.org.cdn.cloudflare.net` 对应
#### 10. 这个网页包含一些图片。在获取每个图片前，您的主机是否都发出了新的DNS查询？


## 参考资料
* 官方文档第六版：[Wireshark_DNS_v6.01.pdf](WiresharkLab/Wireshark实验-DNS/Wireshark_DNS_v6.01.pdf)
* 官方文档第七版：[Wireshark_DNS_v7.0.pdf](WiresharkLab/Wireshark实验-DNS/Wireshark_DNS_v7.0.pdf)
* 翻译：[Wireshark实验-DNS.md](WiresharkLab/Wireshark实验-DNS/Wireshark实验-DNS.md)
* 解答1：[DNS-参考答案.md](WiresharkLab/Wireshark实验-DNS/DNS-参考答案.md)（ [Ying](https://github.com/IrisZhang) )
* 解答2：[计算机网络实验-DNS.pdf](WiresharkLab/Wireshark实验-DNS/计算机网络实验-DNS.pdf)（ [CHN-STUDENT](https://github.com/chn-student) )

**（[CHN-STUDENT](https://github.com/chn-student)注：DNS实验中一个服务器已经不在使用，且部分现象无法解释，仅供参考。）**
