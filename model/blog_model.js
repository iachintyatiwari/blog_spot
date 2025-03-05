const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({

    title:{

        type:String,
        required:true,
    },
    content:{

        type:String,
        required:true,
    },
    createdBy:{

        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},{timeStamps:true});

const blog = mongoose.model("blog",blogSchema);

module.exports = blog;