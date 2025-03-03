const user = require("../model/user_model.js");
const bcrypt = require("bcrypt");

async function createUser(req,res){

    const {fName,lName,email,password} = req.body;

    await user.create({fName,lName,email,password}); 

     return res.redirect("/login");
}




async function loginUser(req,res){

   const {email,password}= req.body;
   
   try{

   const User = await user.findOne({email});
   if(!User) throw new Error("User Not Found");
  
   const matchPass = await bcrypt.compare(password,User.password);
   if(!matchPass) throw new Error("Wrong Password");

   return res.json("SUCCESS LOGIN");

   }catch(err){
    return res.render("login",
      {error:err});
  }
}









module.exports = {createUser,loginUser};