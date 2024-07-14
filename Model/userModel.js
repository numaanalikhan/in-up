const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isActive:{type:Boolean,required:true},
    createAt:{type:Date,required:true},
    lastLogin:{type:Date,required:true},
    updatedAt:{type:Date,default:Date.now()}
})

module.exports= mongoose.model("users",userSchema);