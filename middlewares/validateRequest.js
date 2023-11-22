const CustomError = require("../helper/customError");

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const msg = error.details[0].message;
      throw new CustomError(msg, 400);
    } else {
      next();
    }
  };
};

module.exports = validateRequest;
