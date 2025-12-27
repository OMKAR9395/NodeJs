const http = require('http');

const fs = require('fs');

http
  .createServer((req, resp) => {
    fs.readFile('./form.html', 'utf-8', (error, data) => {
      if (req.url === '/' && req.method === 'GET') {
        fs.readFile('./form.html', 'utf-8', (error, data) => {
          if (error) {
            resp.writeHead(500, { 'content-type': 'text/plain' });
            return resp.end('Internal Server Error');
          }

          resp.writeHead(200, { 'content-type': 'text/html' });
          resp.end(data);
        });
      } else if (req.url === '/submit') {
        resp.writeHead(200, { 'content-type': 'text/html' });
        resp.end('<h1>Data Submitted And Navigated Successfully</h1>');
      } else {
        resp.writeHead(404, { 'content-type': 'text/plain' });
        resp.end('Page Not Found');
      }
    });
  })
  .listen(3500);
