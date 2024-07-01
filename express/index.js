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
app.use(express.json())
app.post("/hi",(req,res)=>{
    // let data = "";
    // req.on("data" , (info) => {
    //   data += info;
    // })
    // req.on("end",() => {
    //     const obj =JSON.parse(data)
        // console.log(obj.name)
        //express.json-i depqum >>>>>>>>>>>>
        console.log(req.body.name)
        res.send("ameninch lave ")

    });
// });

//for not to write all of this ,we can use express middleware that cam handle respons soo



app.listen(3001)