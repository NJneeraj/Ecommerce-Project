const db = require("../models");

const addReview = async (req, res) => {
  const { productId } = req.params;
  const { body, rating } = req.body;
  const data = {
    body,
    rating,
    productId,
  };
  await db.Review.create(data);
  res.redirect("/api/products");
};

const deleteReview = async (req, res) => {
  const { id, productId } = req.params;
  const review = await db.Review.find({
    where: {
      id: id,
      productId: productId,
    },
  });
  await review.destroy();
  res.redirect("/api/products");
};

module.exports = { addReview, deleteReview };
