const http = require('http')

http.createServer(function (require, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end('<h1 style="text-align: center">Hello World!</h1>')
}).listen(process.env.PORT || 5050)

console.log('Server is runing PORT 5050')
console.log('Open URL: http://localhost:5050')
