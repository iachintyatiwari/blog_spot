const mongoose = require("mongoose");

async function connectDB(url){

    await mongoose.connect(url);
    return console.log("DB CONNECTED");

}

module.exports = connectDB;