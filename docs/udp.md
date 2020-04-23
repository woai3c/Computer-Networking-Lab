# TCP 文档
## 特点
* 无需连接建立
* 无连接状态
* 不可靠数据传输
* 没有拥塞控制机制
* 分组首部开销小（8字节）
* UDP 对应用层的报文既不拆分，也不合并，一次交付一个完整的报文
* 支持一对一、一对多、多对一、多对多通信

## TCP 报文段结构
UDP 报文由首部字段和数据字段两部分组成。

![](https://github.com/woai3c/Computer-Networking-Lab/blob/master/imgs/udp.jpg)
