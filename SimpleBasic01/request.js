const http = require('http');
http.createServer((req,resp)=>{
    if(req.url == '/'){
        resp.write('<h1>Hello Dashboard page works</h1>');
    }else if(req.url == '/login'){
        resp.write('<h1>Hello login page works</h1>');
    }else if(req.url == '/mainmenu'){
        resp.write('<h1>Hello Main Menu page works</h1>');
    }else if(req.url == '/contact'){
        resp.write('<h1>Hello Contact page works</h1>');
    }else{
        resp.write('<h1>Please enter valid url</h1>');
    }
    resp.end();
}).listen(3500);