const express = require('express');
const PORT = 3000;
const app = express();

app.get('/',(req,res)=>{
   console.log("First express route is called !!"); 
})

app.listen(PORT,(req,res)=>{
   console.log(`Running on ${PORT}....`);
})