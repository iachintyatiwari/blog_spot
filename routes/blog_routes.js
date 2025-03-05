const express = require("express");
const route = express.Router();
const {createBlog,getBlog} = require("../controler/blog_handler.js");


route.post("/",createBlog);
route.get("/:id",getBlog);

module.exports = route;