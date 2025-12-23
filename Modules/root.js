const http = require('http');
const userForm = require('./userForm');
const userDataSubmit = require('./userDataSubmit');

http.createServer((req,resp)=>{
    if(req.url == '/'){
        resp.writeHead(200,{"content-type":"text/html"})
        userForm(req,resp);
    }else if(req.url == '/submit'){
        resp.writeHead(200,{"content-type":"text/html"})
        userDataSubmit(req,resp);
    }else {
        resp.writeHead(404);
        resp.end("Page Not Found");
    }
    
}).listen(3200);