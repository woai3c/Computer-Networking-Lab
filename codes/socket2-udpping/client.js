const dgram = require('dgram')
const client = dgram.createSocket('udp4')
const TIMES = 10
let time = 0
let timer = null

client.on('error', (err) => {
    console.log(`客户端异常：\n${ err.stack }`)
    client.close()
})

const rtts = []
client.on('message', msg => {
    clearTimeout(timer)
    const rtt = new Date() - msg.toString().split(' ').pop()
    rtts.push(rtt)
    console.log(`RTT: ${ rtt } ms`)
    ping()
})

ping()

function calculateRTT(data) {
    let sum = 0
    data.forEach(rtt => {
        sum += rtt
    })

    console.log(`平均 RTT: ${ sum / data.length } ms`)
    console.log(`最大 RTT: ${ Math.max(...data) } ms`)
    console.log(`最小 RTT: ${ Math.min(...data) } ms`)
    console.log(`丢包率: ${ (TIMES - data.length) / TIMES * 100 }%`)
    client.close()
}

function isTimeout() {
    timer = setTimeout(() => {
        console.log('请求超时')
        ping()
    }, 1000)
}

function ping() {
    if (++time <= TIMES) {
        client.send(`ping ${ time } ${ new Date().getTime() }`, 8080)
        isTimeout()
    } else {
        calculateRTT(rtts)
    }
}