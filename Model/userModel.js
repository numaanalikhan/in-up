const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,uniqueCaseInsensitive:true},
    password:{type:String,required:true},
    isActive:{type:Boolean,default:true},
    createdAt:{type:Date,required:true},
    lastLogin:{type:Date,required:true},
    updatedAt:{type:Date,default:Date.now}
})
userSchema.plugin(uniqueValidator,{message:"{VALUE} is already existed"});

module.exports= mongoose.model("users",userSchema);