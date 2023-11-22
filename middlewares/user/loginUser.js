const Joi = require("joi");
const validateRequest = require("../validateRequest");

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
module.exports.validateLogin = validateRequest(loginSchema);
