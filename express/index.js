import express from "express"
// import path from "path"
const app =  express();
// app.use((req,res,next) =>{
//     console.log(req.url);
//     next()
// })

app.use(express.static("public"))

// app.get("/",(req,res)=> {
//      res.sendFile(path.resolve('public/index.html'))  //sra poxaren expressy- aveli hesht
// })

app.get('/' , (req,res)=>{
    req.redirect("/index.html")
})

app.get("/hello",(req,res)=> {
    res.send("yeey")
})

app.get("/bye",(req,res)=> {
    res.send({
        name:"joe"
    });
})

app.listen(3001)