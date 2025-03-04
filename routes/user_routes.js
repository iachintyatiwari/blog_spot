const express = require("express");
const router = express.Router();
const {loginUser,createUser,userLogout} = require("../controler/user_handler.js");


router.post("/signup",createUser);
router.post("/login",loginUser);
router.get("/logout",userLogout);




module.exports = router;
