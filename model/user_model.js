const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// const bcrypt = require(b),
// SALT_WORK_FACTOR = 10;

const userSchema = mongoose.Schema({

    fName:{

        type:String,
        required:true,
    },
    lName:{

        type:String,
        required:true,
    },
    email:{

        type:String,
        required:true,
        unique:true,

    },salt:{

        type:String,

    },password:{

        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER"
    },
},{timestamps:true});


// MIDDLEWEAR TO HASH PASWWORD BEFORE SAVEING   

userSchema.pre("save",function(next){

    const user = this;
    if(!user.isModified("password")) return;

    const salt = bcrypt.genSaltSync(10);

    this.password = bcrypt.hashSync(this.password,salt);

    next();
})

const user = mongoose.model("user",userSchema);

module.exports = user;