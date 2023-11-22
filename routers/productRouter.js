const express = require("express");
const { catchAsync } = require("../helper/catchAsync");
const {
  getAll,
  getWithId,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { validateProduct } = require("../middlewares/validateProduct");
const { addReview, deleteReview } = require("../controllers/reviewController");
const router = express.Router();

router.get("/", catchAsync(getAll));
router.get("/:id", catchAsync(getWithId));
router.post("/", validateProduct, catchAsync(addProduct));
router.put("/:id", validateProduct, catchAsync(updateProduct));
router.delete("/:id", catchAsync(deleteProduct));
router.post("/:productId/review", catchAsync(addReview));
router.delete("/:productId/review/:id", catchAsync(deleteReview));

module.exports.productRouter = router;
