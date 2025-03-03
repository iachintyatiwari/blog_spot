const express = require("express");
const router = express.Router();
const {loginUser,createUser} = require("../controler/user_handler.js");


router.post("/signup",createUser);
router.post("/login",loginUser);




module.exports = router;
