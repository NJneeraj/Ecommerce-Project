const express = require("express");
const { catchAsync } = require("../helper/catchAsync");
const {
  getAllCategories,
  addCategory,
  getCategory,
} = require("../controllers/categoryController");
const { validateCategory } = require("../middlewares/validateCategory");
const router = express.Router();

router.get("/", catchAsync(getAllCategories));
router.get("/:id", catchAsync(getCategory));
router.post("/", validateCategory, catchAsync(addCategory));

module.exports.categoryRouter = router;
