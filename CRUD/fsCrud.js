const fs = require('fs');

//create file
// fs.writeFileSync('files/banana.txt', 'Hello this is banana fruit');

//delete file
// fs.unlinkSync('files/banana.txt');

//read file   and which format
// const data = fs.readFileSync('files/banana.txt', 'utf-8');
// console.log(data);

//update file
// fs.appendFileSync('files/banana.txt', ' and this is updated files text');

//terminal input
// console.log(process);

//  write
const operation = process.argv[2];
if (operation == 'write') {
  const name = process.argv[3];
  const content = process.argv[4];
  // console.log(operation, name, content);
  fs.writeFileSync('files/' + name + '.txt', content);
} else if (operation == 'read') {
  //    read
  const name = process.argv[3];
  // const content = process.argv[4];
  // console.log(operation, name, content);
  const fullName = 'files/' + name + '.txt';
  let data = fs.readFileSync(fullName, 'utf-8');
  console.log(data);
} else if (operation == 'update') {
  //    update
  const name = process.argv[3];
  const content = process.argv[4];
  // console.log(operation, name, content);
  const fullName = 'files/' + name + '.txt';
  let data = fs.appendFileSync(fullName, content);
  console.log(data);
} else if (operation == 'delete') {
  //    Delete
  const name = process.argv[3];
  const fullName = 'files/' + name + '.txt';
  fs.unlinkSync(fullName);
} else {
  console.log('operation not found please enter valid operation');
}
