//Assignment To make Todo list

const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

let data = []

app.get('/todo', (req, res) => res.send(data))

app.post('/todo',(req,res)=>{
   const  entry = req.body;
   if(entry.task==null) return res.status(404).json({ message: 'Task Not Found !!' });
   data.push({
    id : data.length+1,
    task : entry.task
   })
   return res.status(200).json({message:"Succesfully Added !!"});
});

app.patch('/todo',(req,res)=>{
    const temp = req.body;
    if(temp.task==null) return res.status(404).json({ message: 'Task Not Found !!' });
    if(temp.id==null) return res.status(404).json({ message: 'ID Not Found !!' });

     let flag = false;
    data.forEach((val)=>{
       if(val.id==temp.id){
        flag = true;
        val.task = temp.task;
       }
    })

    if(flag) return res.status(201).json({ message: 'Updated Successfully !!' });
    else return res.status(404).json({ message: 'Entry Not Found !!' });
})

app.delete('/todo',(req,res)=>{
    const entry = req.body;
    const intinallength = data.length;
   data =   data.filter((val)=>{
    return val.id!=entry.id;
   })

   if(data.length==intinallength){
   return res.status(404).json({ message: 'Todo not found' });
   }
   return res.status(200).json({message:"Succesfully Deleted !!"});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))