const express = require("express");
const { catchAsync } = require("../helper/catchAsync");
const {
  getCartItems,
  addToCart,
  removeFromCart,
  getCart,
} = require("../controllers/cartController");
const router = express.Router();
router.get("/", catchAsync(getCart));
router.get("/:id", catchAsync(getCartItems));
router.post("/:userId", catchAsync(addToCart));
router.delete("/:id", catchAsync(removeFromCart));

module.exports.cartRouter = router;
