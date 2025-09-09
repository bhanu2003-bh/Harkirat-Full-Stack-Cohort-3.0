const express = require('express')
const cors =  require('cors');
const jwt = require('jsonwebtoken');


//Constants
const app = express();
const port = 3000;
const JWT_SECRET = "MyProject";


//Variables
const AutehnticationDB = new Map();
const TodoStorageDB = new Map();


//Middlewares
app.use(cors());
app.use(express.json());

//Functions
function auth(req,res,next){
    const token = req.body.token;

   try{
     const username = jwt.verify(token,JWT_SECRET).username;
     req.username = username;
     next();
   }
   catch(error){
       res.status(401).json({
        "Error" : "User is Unauthorized"
       })
   }

}




//Routes
app.post('/signup', (req, res) =>{

        //console.log("Body:",req.body);
       const username = req.body.username;
       const password = req.body.password;
   
         if(AutehnticationDB.has(username))  res.status(401).json({"Error" : "User Already Exists"});
          else{
         AutehnticationDB.set(username,password);
         res.status(200).json({
          "message" :"Success"
         })
        }

});

app.post('/signin',(req,res)=>{
    const username = req.body.username;
       const password = req.body.password;

       if(!AutehnticationDB.has(username)){
        res.status(401).json({"Error" : "User Not Exists"});
       }
       else{
           if(AutehnticationDB.get(username)==password){
               const token =  jwt.sign({
                    "username" : username
                },JWT_SECRET);

                res.status(201).json({
                    "token" : token
                })
           }
           else{
              res.status(401).json({"Error" : "Password Incorrect"});
           }
       }
});


app.post('/Adddata',auth,(req,res)=>{
       const todo = req.body.todo;
       console.log("Body:",req.body);
       console.log("Todo:",todo);
        let prevtodos = [];
        if(TodoStorageDB.has(req.username)) prevtodos =  TodoStorageDB.get(req.username);
        console.log("prevtodo",prevtodos);
        prevtodos.push(todo)
       TodoStorageDB.set(req.username,prevtodos);
        res.status(201).json({
            "message" : "Sucess !!"
        })
});


app.post('/GetAllData', auth, (req,res)=>{
   res.status(200).json({
    "todos" : TodoStorageDB.get(req.username) || []
   })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))