const db = require("../models");

const addReview = async (req, res) => {
  const { productId } = req.params;
  const { body, rating } = req.body;
  const data = {
    body,
    rating,
    productId,
  };
  const review = await db.Review.create(data);
  const resp = { msg: "ok", data: review };
  res.status(200).json(resp);
};

const deleteReview = async (req, res) => {
  const { id, productId } = req.params;
  const review = await db.Review.findOne({
    where: {
      id: id,
      productId: productId,
    },
  });
  await review.destroy();
  res.status(200).json({ msg: "ok", data: review });
};

module.exports = { addReview, deleteReview };
