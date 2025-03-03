const express = require("express");
const connectDB = require("./conn.js");
const path = require("path");
const staticRoutes = require("./routes/static_routes.js");
const userRoutes = require("./routes/user_routes.js");


const app = express();
const PORT =8000;
connectDB("mongodb://127.0.0.1:27017/blogspot");

app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use("/",staticRoutes);
app.use("/user",userRoutes);



app.listen(PORT,()=>(console.log(`Server started in PORT ${PORT}`)));