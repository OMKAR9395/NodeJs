const http = require('http');
http.createServer((req, res) => {
    // res.write("Hello This is write ");
    res.write('<h1>Hello this is html tag</h1>')
    res.end("Hello This Is my First Api create");
}).listen(4500);