const http = require('http');
let age = 24;
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head>
        <title>Trail And Teach</title>
        </head>
        <body>
        <h1>Hello This First Server Side Programming</h1>
        <p>Hello THis Is Paragraph</p>
        <h6>${age}</h6>
        <h4>${new Date().toDateString()}</h4>
        </body>
        </html>
        `)
        res.end();
});
server.listen(5000);