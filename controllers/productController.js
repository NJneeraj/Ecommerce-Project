const db = require("../models");
const Product = db.Product;

const getAll = async (req, res) => {
    const products = await Product.findAll({});
    res.status(200).json(products);
}
const getWithId = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findOne({
        where: {
            id: id
        }
    });
    if (!product) { throw new Error("No product with the id") }
    res.status(200).json(product);
}
const addProduct = async (req, res) => {
    const productData = req.body;
    const product = await Product.create(productData);
    res.status(200).json(product);
}
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const product = await Product.findOne({ where: { id: id } });
    if (!product) throw new Error("Product not found!");
    await product.update(updateData);
    await product.save();
    res.status(200).json(product);
}
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.destroy({
        where: {
            id: id
        }
    })
    if (!product) { throw new Error("Product does not Exist") }
    res.status(200).json(product);
}
module.exports = { getAll, getWithId, addProduct, updateProduct, deleteProduct };