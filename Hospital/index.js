const express = require('express')

const app = express();

let data = [
    {
        name:"Bhanu",
        kideny : false
    }
];

app.use(express.json());

app.get('/kidney',(req,res)=>{
    res.send(data);
})

app.post('/kidney',(req,res)=>{
    let entry = req.body;
    console.log(entry);
     data = [...data,{
        name : entry.name,
        kidney : entry.kidney
     }];
     res.send(data);
})

app.delete('/kidney',(req,res)=>{
    const entry = req.body;
    data = data.filter((val)=>{
        return val.name!=entry.name;
    }) 
    res.send(data);
})

app.listen(3001);