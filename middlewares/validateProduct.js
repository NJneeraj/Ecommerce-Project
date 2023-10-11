const Joi = require("joi");

const createProductSchmea = Joi.object({
    name: Joi.string().required().min(4).max(60),
    description: Joi.string().required().max(120),
    price: Joi.number().required().min(10),
    quantity: Joi.number().min(1).required(),
    image: Joi.string().required(),
    user_id: Joi.number().required(),
    category_id: Joi.number().required(),
})
module.exports.validateProduct = (req, res, next) => {
    const { error } = createProductSchmea.validate(req.body);
    if (error) {
        const msg = error.details[0].message;
        throw new Error(msg);
    } else {
        next();
    }
};