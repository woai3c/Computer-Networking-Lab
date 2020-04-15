const net = require('net')

const argv = process.argv
const host = argv[2]
const port = argv[3]
const fileName = argv[4]

const client = net.createConnection(port, host, () => {
    console.log('已连接到服务器')
    client.write(fileName)
})

client.on('data', data => {
    console.log(data.toString())
    client.end()
})

client.on('end', () => {
    console.log('已从服务器断开')
})