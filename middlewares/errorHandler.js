const CustomError = require("../helper/customError");

function handleError(err, req, res, next) {
  let error = {};
  if (err instanceof CustomError) {
    console.log(`Error Occured : ${err.message}`, { error: err });
    error.code = err.statusCode;
    error.message = err.message;
    res.render("error", { error });
  } else {
    console.log(err.message);
    error.code = 500;
    error.message = err.message;
    res.render("error", { error });
  }
}
module.exports = handleError;
