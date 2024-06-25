import path from "path";


const currentDir = path.resolve();
console.log(currentDir)

const filePath = path.join(currentDir , "index.js");
console.log(filePath);
console.log(path.parse(filePath))
