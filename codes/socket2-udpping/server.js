const dgram = require('dgram')
const server = dgram.createSocket('udp4')

server.on('error', (err) => {
    console.log(`服务器异常：\n${ err.stack }`)
    server.close()
})

server.on('message', (msg, rinfo) => {
    if (Math.random(1, 10) * 10 > 4) {
        server.send(msg, rinfo.port)
    }
})

server.on('listening', () => {
    const address = server.address()
    console.log(`服务器监听 ${ address.address }:${ address.port }`)
})

server.bind(8080, 'localhost')