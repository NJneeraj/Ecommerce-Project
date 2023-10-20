const CustomError = require("../helper/customError");
const db = require("../models");
const Category = db.Category;

const getAllCategories = async (req, res) => {
  const categories = await Category.findAll({});
  res.status(200).json({ categories });
};
const addCategory = async (req, res) => {
  const { name } = req.body;
  const cateory = await Category.create({ name: name });
  res.status(200).json({ cateory });
};

module.exports = { getAllCategories, addCategory };
