const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone:{
        type:Number,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});
const User=mongoose.model("User", UserSchema);
module.exports = User;