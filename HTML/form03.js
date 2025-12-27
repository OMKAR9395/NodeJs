const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const { log } = require('console');

http
  .createServer((req, resp) => {
    // HOME PAGE
    if (req.url === '/' && req.method === 'GET') {
      fs.readFile('./form02.html', 'utf-8', (error, data) => {
        if (error) {
          resp.writeHead(500, { 'content-type': 'text/plain' });
          return resp.end('Internal Server Error');
        }
        resp.writeHead(200, { 'content-type': 'text/html' });
        resp.end(data);
      });
    }

    // FORM SUBMIT (POST)
    else if (req.url === '/submit' && req.method === 'POST') {
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      });
      console.log(body);
      req.on('end', () => {
        let rawData = Buffer.concat(body).toString();
        console.log(rawData);
        let formData = queryString.parse(rawData);
        console.log(formData);

        //sunchronous function
        // fs.writeFileSync("./Text/"+formData.name+".txt",rawData);

        //asynchronous function
        fs.writeFile('./Text/' + formData.name + '.txt', rawData, 'utf-8', (err) => {
          if (err) {
            resp.end('Internal  server Error');
          }
        });

        resp.writeHead(200, { 'content-type': 'text/html' });
        resp.end(`
                <h2>Form Submitted Successfully</h2>
                <p>Name: ${formData.name}</p>
                <p>Email: ${formData.email}</p>
            `);
      });
    }

    // 404
    else {
      resp.writeHead(404, { 'content-type': 'text/plain' });
      resp.end('Page Not Found');
    }
  })
  .listen(4500);
