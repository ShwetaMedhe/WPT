const express = require('express');
const users1 = require('./MOCK_DATA.json');
//const usersbylname = require('./MOCK_DATA.json');
const port = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello From Express.");
});

app.get('/users',(req,res)=>{
    res.json(users1);
});

app.get('/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    console.log("id")
    const user = users1.find(user=>user.id===id)
    return res.json(user);
});

app.get('/users1/:email',(req,res)=>{
    const email = req.params.email;
    console.log("email")
    const user= users1.find(user=>user.email===email) 

    return res.json(user);
});


app.get('/usersbyfname/:first_name',(req,res)=>{
    const first_name = req.params.first_name;
    console.log("first_name")
    const user= users1.find(user=>user.first_name===first_name) 

    return res.json(user);
});

app.get('/usersbylname/:last_name',(req,res)=>{
    const last_name = req.params.last_name;
    console.log("last_name")
    const user= users1.find(user=>user.last_name===last_name) 

    return res.json(user);
});


app.delete('/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user = users1.find(user=>user.id===id)
    return res.json(user);

});

app.listen(port);
console.log("From Start Script.");
