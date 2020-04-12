# wireshark 语法
## 捕捉过滤器

|Protocol|Direction|Host(s)|Value|Logical Operations|Other expression|
|-|-|-|-|-|-|
|tcp|dst|10.1.1.1|80|and|tcp dst 10.2.2.2 3128|

### Protocol（协议）
* ther
* fddi
* ip
* arp
* rarp
* decnet
* lat
* sca
* moprc
* mopdl
* tcp
* udp

### Direction（方向）
* src
* dst
* src and dst
* src or dst

如果没有特别指明来源或目的地，则默认使用 src or dst 作为关键字。

例如，host 10.2.2.2 与 src or dst host 10.2.2.2 是一样的。

### Host(s):
* net
* port
* host
* portrange

如果没有指定此值，则默认使用 host 关键字。

例如，src 10.1.1.1 与 src host 10.1.1.1 相同。

### Logical Operations（逻辑运算）
* not
* and
* or

not 具有最高的优先级。or 和 and 具有相同的优先级，运算时从左至右进行。

例如，

“not tcp port 3128 and tcp port 23″与”(not tcp port 3128) and tcp port 23″相同。

“not tcp port 3128 and tcp port 23″与”not (tcp port 3128 and tcp port 23)”不同。

## 显示过滤器

|Protocol|.|String 1|.|String 2|Comparison operator|Value|Logical Operations|Other expression|
|-|-|-|-|-|-|-|-|-|
|ftp||passive||ip|==|10.2.3.4	|xor|ticmp.type|

例子：

snmp || dns || icmp	显示SNMP或DNS或ICMP封包。

ip.addr == 10.1.1.1 显示来源或目的IP地址为10.1.1.1的封包。

ip.src != 10.1.2.3 or ip.dst != 10.4.5.6 显示来源不为10.1.2.3或者目的不为10.4.5.6的封包。

ip.src != 10.1.2.3 and ip.dst != 10.4.5.6 显示来源不为10.1.2.3并且目的IP不为10.4.5.6的封包。

tcp.port == 25	显示来源或目的TCP端口号为25的封包。

tcp.dstport == 25	显示目的TCP端口号为25的封包。

tcp.flags	显示包含TCP标志的封包。

tcp.flags.syn == 0×02	显示包含TCP SYN标志的封包。

如果过滤器的语法是正确的，表达式的背景呈绿色。如果呈红色，说明表达式有误。

## 封包详细信息 (Packet Details Pane)
这个面板是我们最重要的，用来查看协议中的每一个字段。

各行信息分别为
* Frame: 物理层的数据帧概况
* Ethernet II: 数据链路层以太网帧头部信息
* Internet Protocol Version 4: 互联网层IP包头部信息
* Transmission Control Protocol: 传输层T的数据段头部信息，此处是TCP
* Hypertext Transfer Protocol: 应用层的信息，此处是HTTP协议

## 参考资料
* [wireshark使用教程及过滤语法总结——血泪史的汇聚](https://www.zhoulujun.cn/html/tools/NetTools/PacketCapture/7908.html)
