//import jsonwebtoken
const jwt = require("jsonwebtoken");

//authentication middleware
const authMiddleware = async (req, res, next) => {
  const token = req.headers("Authorization");
  if (!token) {
    return res.status(401).json({ message: "unauthorized access" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //save user data
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "unauthorized access",
    });
  }
};

module.exports = authMiddleware;
