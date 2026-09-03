const http = require('http');
http.createServer((request, response) => {
    response.writeHead(200,{
        'content-Type': 'text/plain'
    });
    response.write('Hello World!\n');
    response.end();
}).listen(4000);