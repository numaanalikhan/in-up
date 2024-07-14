const express = require("express");
const mongoose = require("mongoose");
const route = require("./Router/userRoute");
const app = express();

mongoose
.connect("mongodb://localhost:27017/FSA")
.then(console.log("DB is running"))
.catch((err)=>{
    console.log(err);
})

app.use(express.json());
app.use("/user",route);

app.listen(3000,()=>{
    console.log("server is up and running");
});  