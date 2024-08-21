const fs = require('fs');

function blockingFileReadOperation() {
  console.log('Start blocking file read operation');

  const data = fs.readFileSync('./file.txt', 'utf8');
  
  console.log('End blocking file read operation');
  console.log(data);
  
}

console.log('Before blocking operation');

const fileContent = blockingFileReadOperation();

console.log('After blocking operation');
