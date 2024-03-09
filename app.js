const express = require('express');
const collection = require("./mongoose");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.render("register");
})
app.post("/register",async(req,res)=>{
    const data={
        email:req.body.email,
        password:req.body.password,
        username:req.body.username
    }
       
    await collection.insertMany([data]);
    
})
app.get('/users',async(req,res)=>{
    const data= await collection.find({});
    res.json(data);
})
app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('/logindetails',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const user = await collection.findOne({ username });
    if(!user){
        res.send("Invalid Username");
    }
    else 
    {
        res.send("login successful");
    }
})
app.get('/forgot',(req,res)=>{
    res.render("forgot");
})
app.post('/forgotpassword',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const user = await collection.findOne({ username });
    if(!user){
        res.send("user not found");
    }
    else{
        new_password= req.body.password;
        user.password=new_password;
    }
    
})
app.listen("2014",()=>{console.log("2019 Server running")});
