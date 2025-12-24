const fs = require('fs');

//create file
// fs.writeFileSync('files/banana.txt', 'Hello this is banana fruit');

//delete file
// fs.unlinkSync('files/banana.txt');

//read file   and which format
const data = fs.readFileSync('files/banana.txt', 'utf-8');
console.log(data);

//update file
fs.appendFileSync('files/banana.txt', ' and this is updated files text');
