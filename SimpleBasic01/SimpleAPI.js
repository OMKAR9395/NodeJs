const http = require('http');
const { json } = require('stream/consumers');
const userData = [
    {
        name:"omkar",
        age:24,
        email:"omkarmohite85@gmail.com",
        address:"Pune",
        state:"Maharashtra"
    },
    {
        name:"prakash",
        age:26,
        email:"patil@gmail.com",
        address:"Pune",
        state:"Tamilnadu"
    },
    {
        name:"mohite",
        age:20,
        email:"trailandteach@gmail.com",
        address:"Pune",
        state:"goa"
    },
    {
        name:"patil",
        age:27,
        email:"patilomkar@gmail.com",
        address:"Pune",
        state:"Gujarat"
    },
    {
        name:"omkar",
        age:24,
        email:"omkarmohite85@gmail.com",
        address:"Pune",
        state:"Odisa"
    },
]
const server = http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "application/json");
    resp.write(JSON.stringify(userData));
    resp.end();
   
});
server.listen(5000);