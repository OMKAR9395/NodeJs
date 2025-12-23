const http = require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"});
   if(req.url == '/'){
     resp.write(`
        <form action="/submit" method="post">
        <input type="text" placeholder= "Enter Your Name" name="name"/>
        <input type="email" placeholder= "Enter Your Email" name="email"/>
        <button >Click Me</Button>
        </form>
        `)
   }else if(req.url == '/submit'){
    resp.write('<h1>Data Submitted</h1>');
   }
    resp.end();
}).listen(4000);