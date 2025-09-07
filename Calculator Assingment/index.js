const express = require('express')
const app = express()
const port = 3000



app.use((req,res,next)=>{
     const a = req.query.a;
     const b = req.query.b;
     req.a = Number(a);
     req.b = Number(b);
     next();
})

app.get('/add', (req, res)=>{
const a = req.a;
const b = req.b;
res.json({
    "Result" : a+b
})
})

app.get('/sub', (req, res)=>{
const a = req.a;
const b = req.b;

res.json({
    "Result" : a-b
})
})

app.get('/divide', (req, res)=>{
const a = req.a;
const b = req.b;
res.json({
    "Result" : a/b
})
})

app.get('/multiply', (req, res)=>{
const a = req.a;
const b = req.b;
res.json({
    "Result" : a*b
})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))