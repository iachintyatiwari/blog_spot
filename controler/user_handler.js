const user = require("../model/user_model.js");
const bcrypt = require("bcrypt");

async function createUser(req,res){

    const {fName,lName,email,password} = req.body;

    await user.create({fName,lName,email,password}); 

     return res.redirect("/login");
}




async function loginUser(req,res){

     const {email,password}= req.body;

   const User = await user.findOne({email});

   const matchPass = await bcrypt.compare(password,User.password);

   if(matchPass){
    return res.json("SUCCESS LOGIN");
   }
   return res.json("NO USER FOUND");
}










module.exports = {createUser,loginUser};