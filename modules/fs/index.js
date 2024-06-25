import fs from "fs"
import path from "path";

const currentDir = path.resolve();

// const filePath = path.join(currentDir , "package.json");


// fs.readFile(filePath,"utf8",function(error,text){
//     console.log(text)
// })

// fs.promises.readFile(filePath,"utf8").then((text) => {
//     console.log(text)
// })


const filePath= path.join(currentDir, "new.txt")
fs.promises.writeFile(filePath ,"hello everybody")