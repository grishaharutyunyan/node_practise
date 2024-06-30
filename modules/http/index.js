import { createServer  } from 'http'
// "type": "module", this add in package.json for using import , if not use require


const server  = createServer((req,res)=> {

    if(req.url === "/hello") {
        res.writeHead(200, {"Contnet-Type": "text/plain"});
        res.end("hello");
    }else{
        res.writeHead(200, {"Contnet-Type": "text/plain"});
        res.end("bye");
    }
    // res.writeHead(200,{"Content-Type" : "text/plain"})
    // res.end("Hello Armenia")
    // res.writeHead(200,{"Content-Type" : "application/json"})
    // res.end(JSON.stringify({
    //     name : "Joe"
    // }))
})

server.listen(3001, () => {
    console.log("Server running at http://localhost:3001/");
});