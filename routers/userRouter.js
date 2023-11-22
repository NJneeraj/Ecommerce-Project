const express = require("express");
const router = express.Router();

const {
  createUser,
  login,
  listAllUsers,
  deleteUser,
} = require("../controllers/userController");
const { validateUser } = require("../middlewares/user/createUser");
const { validateLogin } = require("../middlewares/user/loginUser");
const { isLoggedIn } = require("../middlewares/user/isLoggedIn");
const { catchAsync } = require("../helper/catchAsync");

/// List all users
router.get("/", catchAsync(listAllUsers));
router.post("/register", validateUser, catchAsync(createUser));
router.post("/login", validateLogin, catchAsync(login));
router.delete("/", catchAsync(deleteUser));
module.exports.userRouter = router;
