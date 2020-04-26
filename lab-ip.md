# Wireshark实验：探究IP (Page288) 
1. 192.168.0.118
2. 1
3. 20, 72, 总长度 92 - 首部长度 20
4. 没有，标志位第 1 位为 0，表示后面没有分片，而且这个请求是第一个包，说明没有分片。
5. 标识位和序号一直在变。
6. 头部长度、总长度、协议、目的地址... 不变；协议、目的地址必须不变；TTL 必须更改。
7. 一直在变，无法描述。
8. 0xe896, 64。
9. 只有 TTL 不变，ID 由于计数器的原因，每次都会自增 1。

## 参考资料
* 官方文档第六版：[Wireshark_IP_v6.0.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-IP/Wireshark_IP_v6.0.pdf)
* 官方文档第七版：[Wireshark_IP_v7.0.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-IP/Wireshark_IP_v7.0.pdf)
* 翻译：[Wireshark_IP_v7.0_Simplified_Chinese.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-IP/Wireshark_IP_v7.0_Simplied_Chinese.pdf) 贡献者：CHN-STUDENT 的老师
* 解答：[计算机网络实验-IP.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-IP/计算机网络实验-IP.pdf)（ [CHN-STUDENT](https://github.com/chn-student) )
