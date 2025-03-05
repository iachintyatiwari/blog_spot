const express = require("express");
const {getAllblogs} = require("../controler/blog_handler.js");
const router = express.Router();


router.get("/login",(req,res)=>{

    return res.render("login");
})


router.get("/signup",(req,res)=>{

    return res.render("signup");
})

router.get("/",async(req,res)=>{

    const allBlogs =await getAllblogs();

    return res.render("home",{ user:req.user,blogs:allBlogs});
})

router.get("/blog_form",(req,res)=>{

    return res.render("blogform");
})

module.exports= router;