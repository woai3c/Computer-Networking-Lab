const http = require('http')
const port = 8080
const host = 'localhost'
const cache = {}

// 代理监听浏览器请求
const proxy = http.createServer((req, res) => {
    if (cache[req.url]) {
        readCache(res, cache[req.url])
        return
    }

    proxyRequest(req, res)
})

proxy.listen(port, host, () => {
    console.log('server listening')
})

function proxyRequest(req, res) {
    console.log('发出代理请求:' + req.url.slice(1))
    const options = {
        hostname: req.url.slice(1),
    }

    // 代理转发浏览器请求
    const proxyreq = http.request(options, proxyres => {
        proxyres.setEncoding('utf8')

        let data = ''
        proxyres.on('data', chunk => {
            data += chunk
        })

        // 将响应结果返回给用户
        proxyres.on('end', () => {
            res.writeHead(proxyres.statusCode, proxyres.headers)
            res.end(data)
            cache[req.url] = {
                data,
                statusCode: proxyres.statusCode,
                headers: proxyres.headers
            }
        })
    })

    proxyreq.on('error', err => {
        console.error(`请求遇到问题: ${ err.message }`)
        res.writeHead('404')
        res.end('')
    })

    proxyreq.end()
}

function readCache(res, data) {
    console.log('读取缓存')
    res.writeHead(data.statusCode, data.headers)
    res.end(data.data)
}