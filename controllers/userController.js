const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const CustomError = require("../helper/customError");
const User = db.Users;

const listAllUsers = async (req, res) => {
  const users = await User.findAll({
    include: { model: db.Cart },
  });
  res.status(200).json({ msg: "success", data: users });
};
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const data = {
    name,
    email,
    password,
  };
  const emailExist = await User.findOne({ where: { email: email } });
  if (emailExist) {
    throw new CustomError("Email exists!", 409);
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  data.password = hashedPassword;
  const user = await User.create(data);
  const resp = {
    message: "user successfully created",
    data: user,
  };
  const cartData = { user_id: user.id, quantity: 0, items: [] };
  await db.Cart.create(cartData);
  res.status(200).json(resp);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    throw new CustomError("User not exists!", 404);
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new CustomError("Incorrect password!", 401);
  }
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
  const resp = {
    msg: "success",
    data: { token },
  };

  res.status(200).header("auth-token", token).json(resp);
};
const deleteUser = async (req, res) => {
  const users = await User.destroy({ where: {} });
  res.status(200).json(users);
};
module.exports = { createUser, login, listAllUsers, deleteUser };
