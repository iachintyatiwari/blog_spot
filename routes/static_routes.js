const express = require("express");
const router = express.Router();
const {getAllblogonHome} = require("../controler/blog_handler.js");


router.get("/login",(req,res)=>{

    return res.render("login");
})


router.get("/signup",(req,res)=>{

    return res.render("signup");
})


router.get("/",getAllblogonHome);


router.get("/blog_form",(req,res)=>{

    return res.render("blogform",{user:req.user});
})

module.exports= router;