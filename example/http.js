const http = require('http');
const server = http.createServer((req, res) => {
        res.writeHeader(200, {'Content-Type':'text/html;charset=UTF-8'})
        res.end('还是要学习一个')
});
server.listen(8000);
console.log('http://localhost:8000')
