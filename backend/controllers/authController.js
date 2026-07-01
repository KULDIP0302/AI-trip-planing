//authentication controller
const bcrypt = require("bcrypt");

//import user model
const userModel = require("../models/userModel");
//register new user
const registerUser = (req, res) => {
  try {
    //getuser data from request body
    const { full_name, email, password, phone } = req.body;
    if (!full_name || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "please provide all required fields",
      });
    }
    if (Result.length > 0) {
      return res.status(400).json({
        success: false,
        message: "user already exists",
      });
    }
    //hash password
    const hashedPassword = bcrypt.hashSync(password, 10);
    //create new user
    const userData = {
      full_name,
      email,
      password: hashedPassword,
      phone,
    };
    //save user
    userModel.createUser(userData, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "internal server error",
        });
      }
      return res.status(201).json({
        success: true,
        message: "user registered successfully",
      });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

//export controller functions
module.exports = {
  registerUser,
};
