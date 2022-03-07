const express = require("express");
const app = express();


app.use(logger);

app.get("/books",(req,res)=>{
    return res.send({ route: "/books"})
})

app.get("/libraries",checkPermission("/libraries"),(req,res)=>{
    return res.send({route: "/libraries",permission: req.permission})
})

app.get("/authors",checkPermission("/authors"),(req,res)=>{
    return res.send({route: "/authors",permission: req.permission})
})

function logger(req,res,next){
    console.log("login success");
    next()
}
function checkPermission(check){
    return function permission(req,res,next){
        if( check=="/authors" || check=="/libraries"){
            req.permission= true;
           return next();
        }
    }
}

app.listen(5000,()=>{
    console.log("listening to 5000")
})