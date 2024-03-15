const User = require("../model/userSchema");
const bcrypt = require('bcrypt');
const path = require('path');

const userUpdate=async (req, res) => {
    const {username,password,email,phone,fname,address } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const updatedUser = await User.findOneAndUpdate({email:email}, {
         username,
         password:hashedPassword,
         email,
         phone,
         fname,
         address
         }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Student not found' });
        }
        console.log(updatedUser);
        req.session.isLoggedIn = true;
        req.session.email = email;
        req.session.username = username;
        req.session.password = password;
        req.session.phone = phone;
        req.session.fname = fname;
        req.session.address = address;
        res.redirect('http://localhost:5000/users/');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
   
};
module.exports=userUpdate;
