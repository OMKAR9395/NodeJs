const http = require('http');
http.createServer((req,resp)=>{
    resp.write("Please check response");
    resp.end();
}).listen(3800);