const CustomError = require("../helper/customError");

function handleError(err, req, res, next) {
  if (err instanceof CustomError) {
    console.log(`Error Occured : ${err.message}`, { error: err });
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Internal server error", msg: err.message });
  }
}
module.exports = handleError;
