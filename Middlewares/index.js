const express = require('express')
const app = express()
const port = 3000;

app.use(express.json())

function fun(req,res,next){
const age = req.body.age;
req.name = "Abhishek Sharma !!" ;
if(age>18){
    next();
}
else{
    res.json({
        "message": "The age is less then 18"
    })
}
}




app.get('/ride1', fun,(req, res) => res.send('Ride1 is successfully done !!'))

app.get('/ride2', (req, res) => res.send('Ride2 is successfully done !!'))

app.get('/ride3', fun,(req, res) => res.send('Ride3 is successfully done !!'))

app.use(fun);

app.get('/Name',(req,res)=>{
   res.json({
    "Name" : req.name
   })
})
app.get('/ride4', (req, res) => res.send('Ride4 is successfully done !!'))

app.get('/ride5', (req, res) => res.send('Ride5 is successfully done !!'))
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


