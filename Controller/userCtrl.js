const userModel = require("../Model/userModel");


const signup = async (req,res)=>{
    try{
    const data = req.body;
    const user = await userModel({...data});
    res.status(200);
    res.send(user);
    }
    catch(err){
        console.log(err);
        res.status(400);
        res.send("Internal Server Error");
    }
}

module.exports = {
    signup,
}