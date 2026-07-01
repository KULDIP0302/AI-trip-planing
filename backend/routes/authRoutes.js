//import express
const express = require("express");

//create router
const router = express.Router();

//import controller
const { registerUser } = require("../controllers/authController");

//register user
router.post("/register", registerUser);
module.exports = router;
