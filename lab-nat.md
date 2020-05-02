# Wireshark实验：探究NAT (Page240)
1. 192.168.1.100。
3. 192.168.1.100:4335, 64.233.169.104:80。
4. 7.158797, 64.233.169.104:80, 192.168.1.100:4335。
5. 7.075657, 192.168.1.100:4335, 64.233.169.104:80, 64.233.169.104:80, 192.168.1.100:4335, 7.108986。
6. 6.069168, 71.192.34.104:4335, 64.233.169.104:80, 检验和、TTL、源地址不同。
7. 没有, 检验和发生了变化，每经过一个路由器都要重新计算首部校验和。
8. 6.117570, 64.233.169.104:80, 71.192.34.104:4335, 检验和、TTL、目的地址不同。
9. 6.035475 和 6.067775, 71.192.34.104:4335, 64.233.169.104:80，检验和、TTL 不同。
10. 192.168.1.100:4335 -> 71.192.34.104:4335

## 参考资料
* 官方文档第六版：[Wireshark_NAT_v6.0.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-NAT/Wireshark_NAT_v6.0.pdf)
* 官方文档第七版：[Wireshark_NAT_v7.0.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-NAT/Wireshark_NAT_v7.0.pdf)
* 翻译：[Wireshark_NAT_v7.0_Simplified_Chinese.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-NAT/Wireshark_NAT_v7.0_Simplied_Chinese.pdf) （[CHN-STUDENT](https://github.com/chn-student) )
* 解答：[计算机网络实验-NAT.pdf](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark实验-NAT/计算机网络实验-NAT.pdf)（ [CHN-STUDENT](https://github.com/chn-student) )