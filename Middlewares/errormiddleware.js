const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/eror',(req,res)=>{
    throw new Error('Something went wrong !!');
})

app.use((err,req,res,next)=>{
   res.statuscode(421).json({
    "message":"Error:"+err
   })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))