const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'qq',
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
        user: 'xxx@qq.com',
        // 这里密码不是qq密码，是你设置的smtp授权码
        pass: 'xxxx',
    }
})

const mailOptions = {
    from: 'xxx@qq.com', // sender address
    to: 'xxx@qq.com', // list of receivers
    subject: 'Hello', // Subject line
    // 发送text或者html格式
    // text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b><div><img src="https://mail.qq.com/cgi-bin/getqqicon?sid=FUtfC6fzQzykPyd5&uin=-1972396698&mode=newaddr&mailaddr=xxx%40qq.com"></div>' // html body
}

// send mail with defined transport object
transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err
    console.log('Message sent: %s', info.messageId)
})