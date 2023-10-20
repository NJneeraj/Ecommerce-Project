const Joi = require("joi");

const categorySchema = Joi.object({
  name: Joi.string().required().min(3),
});
module.exports.validateCategory = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);
  if (error) {
    const msg = error.details[0].message;
    throw new Error(msg);
  } else {
    next();
  }
};
