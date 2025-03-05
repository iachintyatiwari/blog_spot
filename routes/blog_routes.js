const express = require("express");
const route = express.Router();
const createBlog = require("../controler/blog_handler.js");

 route.post("/",createBlog);

 module.exports = route;