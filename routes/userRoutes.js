const express = require('express');
const userRouter = express.Router();
const path = require('path');
const auth=require("../midleware/auth");
const { signup, signin } = require("../controllers/newUserController");
const userUpdate=require("../controllers/userUpdateController");
userRouter.use(express.static(path.join(__dirname,'..','public')));


userRouter.get('/',auth,(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','userHome.html'));
});
userRouter.get('/userUpdate',auth,(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','userUpdate.html'));
});

userRouter.get('/auth',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','userAuth.html'));
});


userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.post("/userUpdate",userUpdate);


module.exports=userRouter;
 