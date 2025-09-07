const express = require('express')
const app = express()
const port = 3000

let map = new Set();

app.use(express.json());

app.use((req,res,next)=>{
  const userid = req.body.userid;
  map.add(userid);
  next();
})

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/currentuser',(req,res)=>{
    res.send("Current user is :"+map.size());
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))