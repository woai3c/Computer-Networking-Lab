const net = require('net')
const fs = require('fs')

net
.createServer(socket => {
    console.log('客户端已连接')
    socket.on('end', () => {
        console.log('客户端已断开连接')
    })

    socket.on('data', data => {
        const fileName = data.toString()
        console.log(fileName)
        if (fileName == 'HelloWorld.html' || fileName == 'index.html') {
            fs.readFile(__dirname + '/' + fileName, 'utf-8', (err, data) => {
                if (err) throw err
                socket.write(data)
            })
        } else {
            socket.write('404 Not Found')
        }
    })
})
.on('error', err => {
    throw err
})
.listen(8080, 'localhost', () => {
    console.log('服务器开始监听localhost:8080')
})