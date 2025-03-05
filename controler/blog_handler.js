const Blog = require("../model/blog_model.js");

async function createBlog(req,res){

    const {title,content} = req.body;

    const blog = await Blog.create({title,content,createdBy:req.user._id});

    return res.redirect("");
}

module.exports = createBlog; 