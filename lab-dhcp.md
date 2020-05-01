# Wireshark实验：探究DHCP (Page240)
1. UDP
2. 相同
3. 帧的目的地址都是全 f, 源地址是自己的 MAC 地址。
4. message type, client ip address, next server address。
5. 0x69e2f890, 由客户端选择的一个随机数，用于客户端与服务器交流和响应。
6. 客户端源地址为 0.0.0.0，目的地址为 255.255.255.255，服务端源地址为自己的 IP 地址，目的地址为 255.255.255.255。
7. 192.168.0.1。
8. 192.168.0.1，OFFER 报文。
9. relay agent address。
10. 路由器是本机的默认网关，子网掩码表示本机的网络号。
11. requested ip address。
12. 避免下线的客户端继续占用着 IP 地址，86400s。
13. 不想要现在的 IP 地址，不确认，服务端会认为客户端还是在租用期内。
14. 有，ARP 根据 IP 地址找出相应的物理地址。

## 参考资料
* 官方文档第六版：[Wireshark_DHCP_v6.0.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-DHCP/Wireshark_DHCP_v6.0.pdf)
* 官方文档第七版：[Wireshark_DHCP_v7.0.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-DHCP/Wireshark_DHCP_v7.0.pdf)
* 翻译：[Wireshark_DHCP_v7.0_Simplified_Chinese.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-DHCP/Wireshark_DHCP_v7.0_Simplied_Chinese.pdf) （[CHN-STUDENT](https://github.com/chn-student) )
* 解答：[计算机网络实验-DHCP.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-DHCP/计算机网络实验-DHCP.pdf)（ [CHN-STUDENT](https://github.com/chn-student) )