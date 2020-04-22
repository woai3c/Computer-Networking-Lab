# Wireshark实验：探究TCP (Page200)
1. 192.168.0.118 10060
2. 128.119.245.12 80
3. 同1
4. SYN 为 1，用于连接建立
5. 0，1，通过序号，代表服务器收到我的连接并确认 syn-ack，握手第二步
6. 152417
9. 8192，会
10. 没有，查看是否有相同序号的 TCP 包
11. 1 个 MSS 的数据，可以

## 参考资料
* 官方文档第六版：[Wireshark_TCP_v6.01.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-TCP/Wireshark_TCP_v6.0.pdf)
* 官方文档第七版：[Wireshark_TCP_v7.0.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-TCP/Wireshark_TCP_v7.0.pdf)
* 翻译：[Wireshark_TCP_v7.0_Simplified_Chinese.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-TCP/Wireshark_TCP_v7.0_Simplified_Chinese.pdf) 贡献者：CHN-STUDENT 的老师
* 解答：[计算机网络实验-TCP.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-TCP/计算机网络实验-TCP.pdf)（ [CHN-STUDENT](https://github.com/chn-student) )