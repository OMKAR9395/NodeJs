const queryString = require('querystring');

function userDataSubmit(req, resp) {
    const dataBody = [];
    req.on('data',(chunk)=>{
        dataBody.push(chunk);
    });
    req.on('end',()=>{
        let rawData = Buffer.concat(dataBody).toString();
        let readableData = queryString.parse(rawData);
        let dataString = `My name Is ${readableData.name} and my email is ${readableData.email}`;
        resp.write(dataString);
       resp.end(); 
    })
}
module.exports = userDataSubmit;