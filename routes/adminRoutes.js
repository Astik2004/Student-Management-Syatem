const express = require('express');
const adminRouter = express.Router();
const path = require('path');
const auth=require("../midleware/auth");
const { signup, signin } = require("../controllers/newAdminController");
const userDetails=require("../controllers/usersDetails");
const deleteUser = require('../controllers/deleteUser');
adminRouter.use(express.static(path.join(__dirname,'..','public')));


adminRouter.get('/',auth,(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','adminHome.html'));
});

adminRouter.get('/auth',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','adminAuth.html'));
});



adminRouter.post("/signup", signup);
adminRouter.post("/signin", signin);
adminRouter.get("/userDetails",userDetails);
adminRouter.delete("/deleteUser/:id",deleteUser);


module.exports=adminRouter;
 