let promise1 = new Promise((resolve,reject) => {
     setTimeout(()=>{
         console.log("DB Request has come !!");
         resolve({"First Name":"Bhanu"});
     },5000)
})

promise1
.then((val)=>{
   
let promise2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("First Name"+val["First Name"]);
        resolve({"Phone Number" : 7297929447})
    },2000)
})    

promise2
.then((val2)=>{
    console.log("Resolve !!" + val2["Phone Number"]);
})
.catch((val2)=>{
console.log("Rejected !!"+ val2);
})
.finally(()=>{
    console.log("DB query is Fetched !!");
})

})
.catch((val)=>{
console.log("Promise1 is get in  Rejected !!");
console.log(val);
})


//---------------------------------------------------Fake Fetch---------------------------------------

async function Bhanu() {
    try {
        let val = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        val = await val.json();  // 👈 await here
        console.log(val);
    } catch (e) {
        console.log(e);
    }
}

Bhanu();
