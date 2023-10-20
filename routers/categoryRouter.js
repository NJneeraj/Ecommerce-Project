const express = require("express");
const { wrapAsync } = require("../helper/catchAsync");
const {
  getAllCategories,
  addCategory,
} = require("../controllers/categoryController");
const { validateCategory } = require("../middlewares/validateCategory");
const router = express.Router();

router.get("/", wrapAsync(getAllCategories));
router.post("/", validateCategory, wrapAsync(addCategory));

module.exports.categoryRouter = router;
