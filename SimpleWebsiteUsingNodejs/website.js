const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {
    if (req.url == '/') {
        fs.readFile("html/home.html", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" })
                resp.end("Internal server error");
                return false;
            }
            resp.write(data);
            resp.end();
        })

    } else if (req.url == '/style.css') {
        fs.readFile("html/style.css", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" })
                resp.end("Css Not Found");
                return false;
            }
             resp.writeHead(200, { "content-type": "text/css" })
            // resp.write(data);
            resp.end(data);
        })
    }else {
        resp.writeHead(404, { "Content-Type": "text/plain" });
        resp.end("Page Not Found");
    }
}).listen(4000);