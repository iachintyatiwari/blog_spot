const Blog = require("../model/blog_model.js");

async function createBlog(req,res){

    const {title,content} = req.body;

    const blog = await Blog.create({title,content,createdBy:req.user._id});

    return res.redirect(`/blog/${blog._id}`);
}   

async function getBlog(req,res){

    const blog = await Blog.findById(req.params.id);

    return res.render("blog",{
        blog,
        user:req.user,
    });
}

async function getAllblogonHome(req,res){

    const allBlogs = await Blog.find({});

    return res.render("home",{user:req.user,blogs:allBlogs});
}

module.exports = {createBlog,getBlog,getAllblogonHome}; 