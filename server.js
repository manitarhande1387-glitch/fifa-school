const express = require("express");
const app = express();

app.use(express.json());

let players=[];

app.post("/register",(req,res)=>{
 players.push(req.body);

 console.log("ثبت نام جدید:",req.body.name);

 res.json({ok:true});
});

app.get("/players",(req,res)=>{
 res.json(players);
});

app.listen(3000,()=>{
 console.log("server running");
});
