const userModel = require("../Model/userModel");

const signup = async (req,res)=>{
    try{
    const data = req.body;
    data.lastLogin = new Date();
    data.createdAt= new Date();
    // console.log(data)
    const user = new userModel({...data});
    await user.save();
    // user.save();
    // console.log(user)
    res.status(201);
    res.json(user);
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.send("Internal Server Error");
    }
}

module.exports = {
    signup,
}