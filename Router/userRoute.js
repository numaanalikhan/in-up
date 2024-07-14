const express = require("express");
const router = express.Router();
const userCtrl = require("../Controller/userCtrl")

router.get("/signup",userCtrl.signup);

module.exports= router;