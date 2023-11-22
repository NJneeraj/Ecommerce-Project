const db = require("../models");
module.exports.hasCart = async (req, res, next) => {
  const { id } = req.params;
  const cart = await db.Cart.findOne({
    where: {
      user_Id: id,
    },
  });
  if (!cart) {
    await db.Cart.create({ userId: id, items: [], quantity: 0 });
  }
  next();
};
