# Wireshark实验：探究以太网和ARP (Page335)
1. 90:2b:34:d9:77:db
2. b4:0f:3b:fa:4c:70， 不是，它是以太网帧下一跳目的站的 MAC 地址。
3. 0x0800, IPv4
4. 55，各种首部加上已经出现的 “GET” 中的 G 这个字节。
5. b4:0f:3b:fa:4c:70，以太网帧的上一跳地址，通常来说是我计算机地址的默认网关的适配器。
6. 90:2b:34:d9:77:db，我计算机的地址，设备是适配器。
7. 0x0800, IPv4
9. IP 地址，物理地址，类型
10. 90:2b:34:d9:77:db，ff:ff:ff:ff:ff:ff
11. 0x0806(ARP)
12. a:21, b:1, c:包含, d: TAR MAC address 字段
13. a:21, b:2, c: Sender MAC address 字段
14. b4:0f:3b:fa:4c:70, 90:2b:34:d9:77:db
15. 与这个请求分组要查询的 IP 地址一致的主机才会收下这个 ARP 请求分组

## 参考资料
* 官方文档第六版：[Wireshark_Ethernet_ARP_v6.01.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-Ethernet-ARP/Wireshark_Ethernet_ARP_v6.01.pdf)
* 官方文档第七版：[Wireshark_Ethernet_ARP_v7.0.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-Ethernet-ARP/Wireshark_Ethernet_ARP_v7.0.pdf)
* 翻译：[Wireshark_ARP_v7.0_Simplified_Chinese.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-Ethernet-ARP/Wireshark_Ethernet_ARP_v7.0_simpified_chinese.pdf) （[CHN-STUDENT](https://github.com/chn-student) )
* 解答：[计算机网络实验-以太网和ARP.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-Ethernet-ARP/计算机网络实验-以太网和ARP.pdf)（[CHN-STUDENT](https://github.com/chn-student) )