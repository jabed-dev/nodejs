const http = require('http')

http.createServer(function (require, response) {
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end("Hello World!")
}).listen(process.env.PORT || 5050)

console.log('Server is runing PORT 5050')
console.log('Open URL: http://localhost:5050')
