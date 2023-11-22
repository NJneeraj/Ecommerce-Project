const Joi = require("joi");
const validateRequest = require("../validateRequest");

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
module.exports.validateUser = validateRequest(createUserSchema);
