const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "unauthorized access",
    });
  }
  try {
    const jwtToken = token.startsWith("Bearer") ? token.slice(7) : token;
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "invalid token",
    });
  }
};
module.exports = authMiddleware;
