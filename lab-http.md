# Wireshark实验 - HTTP (Page121)
#### 1. 您的浏览器是否运行HTTP版本1.0或1.1？服务器运行什么版本的HTTP？
1. http1.1
2. http1.1
#### 2. 您的浏览器会从接服务器接受哪种语言（如果有的话）？
`Accept-Language: zh-CN,zh;q=0.9`
#### 3. 您的计算机的IP地址是什么？ gaia.cs.umass.edu服务器地址呢？
1. 192.168.0.118
2. 128.119.245.12
#### 4. 服务器返回到浏览器的状态代码是什么？
200 OK
#### 5. 服务器上HTML文件的最近一次修改是什么时候？
`Last-Modified: Tue, 14 Apr 2020 05:59:01 GMT`
#### 6. 服务器返回多少字节的内容到您的浏览器？
128
#### 7. 通过检查数据包内容窗口中的原始数据，你是否看到有协议头在数据包列表窗口中未显示？ 如果是，请举一个例子。
没有

#### 8. 检查第一个从您浏览器到服务器的HTTP GET请求的内容。您在HTTP GET中看到了“IF-MODIFIED-SINCE”行吗？
第一次请求，不会有这个字段。
#### 9. 检查服务器响应的内容。服务器是否显式返回文件的内容？ 你是怎么知道的？
是，查看 `Line-based text data: text/html (10 lines)` 字段
#### 10. 现在，检查第二个HTTP GET请求的内容。 您在HTTP GET中看到了“IF-MODIFIED-SINCE:”行吗？ 如果是，“IF-MODIFIED-SINCE:”头后面包含哪些信息？
看到了，包含的信息为 `Tue, 14 Apr 2020 05:59:01 GMT`
#### 11. 针对第二个HTTP GET，从服务器响应的HTTP状态码和短语是什么？服务器是否明确地返回文件的内容？请解释。
1. `HTTP/1.1 304 Not Modified`
2. 没有，因为有缓存

#### 12. 您的浏览器发送多少HTTP GET请求消息？哪个数据包包含了美国权利法案的消息？
1 个，从第 81 个包开始就有美国权利法案的消息。
#### 13. 哪个数据包包含响应HTTP GET请求的状态码和短语？
第 81 个包
#### 14. 响应中的状态码和短语是什么？
200 OK
#### 15. 需要多少包含数据的TCP段来执行单个HTTP响应和权利法案文本？
4 个

#### 16. 您的浏览器发送了几个HTTP GET请求消息？ 这些GET请求发送到哪个IP地址？
1. 4 个
2. 128.119.245.12
#### 17. 浏览器从两个网站串行还是并行下载了两张图片？请说明。
串行，根据包的顺序。第一张图片响应完了才发的第二张图片请求。

#### 18. 对于您的浏览器的初始HTTP GET消息，服务器响应（状态码和短语）是什么响应？
`HTTP/1.1 401 Unauthorized`
#### 19. 当您的浏览器第二次发送HTTP GET消息时，HTTP GET消息中包含哪些新字段？
`Authorization: Basic d2lyZXNoYXJrLXN0dWRlbnRzOm5ldHdvcms=`
## 参考资料
* [HTTP Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)
* 官方文档第六版：[Wireshark_HTTP_v6.1.pdf](WiresharkLab/Wireshark实验-HTTP/Wireshark_HTTP_v6.1.pdf)
* 官方文档第七版：[Wireshark_HTTP_v7.0.pdf](WiresharkLab/Wireshark实验-HTTP/Wireshark_HTTP_v7.0.pdf)
* 翻译：[Wireshark实验-HTTP.md](WiresharkLab/Wireshark实验-HTTP/Wireshark实验-HTTP.md)
* 解答部分1：[计算机网络实验-HTTP1.pdf](WiresharkLab/Wireshark实验-HTTP/计算机网络实验-HTTP1.pdf)（ [CHN-STUDENT](https://github.com/chn-student) )
* 解答部分2：[计算机网络实验-HTTP2.pdf](WiresharkLab/Wireshark实验-HTTP/计算机网络实验-HTTP2.pdf)（ [CHN-STUDENT](https://github.com/chn-student) )
