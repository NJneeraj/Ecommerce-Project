const CustomError = require("../helper/customError");
const db = require("../models");
const Product = db.Product;

const getAll = async (req, res) => {
  const {
    search,
    minPrice,
    maxPrice,
    sortBy,
    sortOrder,
    page = 1,
    pageSize = 10,
  } = req.query;

  const conditions = {};
  if (search) {
    conditions.name = { [db.Sequelize.Op.iLike]: `%${search}%` };
  }
  if (minPrice) {
    conditions.price = { [db.Sequelize.Op.gte]: minPrice };
  }
  if (maxPrice) {
    conditions.price = {
      ...conditions.price,
      [db.Sequelize.Op.lte]: maxPrice,
    };
  }
  const order =
    sortBy && sortOrder ? [[sortBy, sortOrder]] : [["createdAt", "DESC"]];
  const offset = (page - 1) * pageSize;

  const products = await Product.findAll();
  const categories = await db.Category.findAll();
  res.render("home", { products, categories });
};
const getWithId = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({
    where: {
      id: id,
    },
    include: {
      model: db.Review,
      as: "reviews",
    },
  });
  if (!product) {
    throw new CustomError("No product with the id", 404);
  }
  // res.json(product);
  res.render("products/detail", { product });
};
const addProduct = async (req, res) => {
  const productData = req.body;
  const product = await Product.create(productData);
  res.status(200).json(product);
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const product = await Product.findOne({ where: { id: id } });
  if (!product) throw new CustomError("Product not found!", 404);
  await product.update(updateData);
  await product.save();
  res.status(200).json(product);
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.destroy({
    where: {
      id: id,
    },
  });
  if (!product) {
    throw new CustomError("Product does not Exist", 404);
  }
  res.status(200).json(product);
};
module.exports = {
  getAll,
  getWithId,
  addProduct,
  updateProduct,
  deleteProduct,
};
