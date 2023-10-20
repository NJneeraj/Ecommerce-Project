const express = require("express");
const { wrapAsync } = require("../helper/catchAsync");
const {
  getAll,
  getWithId,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { validateProduct } = require("../middlewares/validateProduct");
const router = express.Router();

router.get("/", wrapAsync(getAll));
router.get("/:id", wrapAsync(getWithId));
router.post("/", validateProduct, wrapAsync(addProduct));
router.put("/:id", validateProduct, wrapAsync(updateProduct));
router.delete("/:id", wrapAsync(deleteProduct));

module.exports.productRouter = router;
