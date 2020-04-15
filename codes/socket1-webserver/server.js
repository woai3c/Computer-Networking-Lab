const http = require('http')
const fs = require('fs')

http
.createServer((req, res) => {
    if (req.url == '/HelloWorld.html' || req.url == '/index.html') {
        fs.readFile('.' + req.url, 'utf-8', (err, data) => {
            if (err) throw err
            res.end(data)
        })
    } else {
        res
        .writeHead(404)
        .end()
    }
})
.listen(8080, 'localhost', () => {
    console.log('服务器开始监听')
})
.close(() => {
    console.log('服务器关闭')
})