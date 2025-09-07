const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

app.use((req,res,next)=>{
    req.a = Number(req.body.a);
    req.b = Number(req.body.b);
    next();
})

app.post('/Add', (req, res) => res.json({"result": req.a + req.b}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))