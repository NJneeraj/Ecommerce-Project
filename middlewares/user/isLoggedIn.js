const jwt = require("jsonwebtoken");
const CustomError = require("../../helper/customError");

module.exports.isLoggedIn = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    throw new CustomError("Access denied!", 401);
  }
  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    console.log(err.message);
    throw new CustomError("Invalid token", 401);
  }
};
