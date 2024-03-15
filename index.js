const express = require('express');
// const connection = require('./config/db');
// const cors = require('cors');
const app = express();
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
var session = require("express-session");
const User=require("./model/userSchema");

const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static('public'));
// app.use(cors());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }));

app.use("/users",userRouter);
app.use("/admin",adminRouter);

app.get("/", (req,res)=>{
    res.send("hello"); 
 });

app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("Error logging out: ",err);
        }
        return res.status(200);
    })
});

app.get('/getUserDetail',(req,res)=>{
    let data = {
        email: req.session.email,
        username: req.session.username,
        password:req.session.password,
        phone:req.session.phone,
        fname:req.session.fname,
        address:req.session.address
    };
    res.status(200).json(data);
});

 

mongoose.connect("mongodb://127.0.0.1:27017/sms")
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server started on port no. 5000...");
    });
})
.catch((error)=>{
    console.log(error);
})