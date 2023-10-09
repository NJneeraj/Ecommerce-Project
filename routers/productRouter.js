const express = require("express");
const { wrapAsync } = require("../helper/catchAsync");
const { getAll, getWithId, addProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const productRouter = express.Router();


productRouter.get("/", wrapAsync(getAll));
productRouter.get("/:id", wrapAsync(getWithId));
productRouter.post("/", wrapAsync(addProduct));
productRouter.put("/:id", wrapAsync(updateProduct))
productRouter.delete("/:id", wrapAsync(deleteProduct));

module.exports = { productRouter };