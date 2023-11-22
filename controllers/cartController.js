const CustomError = require("../helper/customError");
const db = require("../models");
const Cart = db.Cart;

const getCart = async (req, res) => {
  const carts = await Cart.findAll();
  res.status(200).json(carts);
};
const getCartItems = async (req, res) => {
  const { id } = req.params;
  console.log(id, "???????????????????????");
  const cartData = await Cart.findOne({
    where: { user_id: id },
  });

  const products = await db.Product.findAll({
    where: {
      id: cartData.items,
    },
  });
  const resp = {
    msg: "success",
    data: products,
  };
  res.render("cart/index", { products });
};

const addToCart = async (req, res) => {
  const { id } = req.body;
  const { userId } = req.params;
  if (!id) throw new CustomError("No id given", 400);
  const cart = await Cart.findOne({ where: { user_id: userId } });
  cart.items = [...cart.items, id];
  await cart.save();
  // const cart = await Cart.update(data);
  const resp = {
    msg: "success",
    data: cart,
  };
  res.redirect(`/api/cart/${userId}`);
};

const removeFromCart = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!id) throw new CustomError("Provide cart id", 400);
  const itm = await Cart.findByPk(id);
  if (!itm) throw new CustomError("No item found", 404);
  itm.items = itm.items.filter((l) => l != product);
  await itm.save();
  const resp = {
    msg: "success",
    data: itm,
  };
  res.redirect(`/api/cart/${id}`);
};

module.exports = { addToCart, getCart, getCartItems, removeFromCart };
