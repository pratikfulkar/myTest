const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res 
     .status(200)
     .send("hello pratik!")
     .end();
});

//start the server

const port =process.env.port || 8080;

app.listen(port,()=>{
    console.log(`app.js listining on port ${port}`);
    
})

