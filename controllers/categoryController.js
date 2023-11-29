const CustomError = require("../helper/customError");
const db = require("../models");
const Category = db.Category;

const getAllCategories = async (req, res) => {
  const categories = await Category.findAll({
    include: {
      model: db.Product,
    },
  });
  res.status(200).json({ categories });
};
const getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByPk(id, {
    include: {
      model: db.Product,
      as: "products",
    },
  });
  let products = category.products;
  res.status(200).json({ msg: "ok", data: products });
};
const addCategory = async (req, res) => {
  const { name } = req.body;
  const cateory = await Category.create({ name: name });
  res.status(200).json({ cateory });
};

module.exports = { getAllCategories, addCategory, getCategory };
