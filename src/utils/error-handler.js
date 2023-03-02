const { StatusCodes } = require("http-status-codes");

class AppErrors extends Error {
  constructor(
    name = "AppError",
    message = "something went wrong",
    explanation = "something went wrong",
    statusCode = 500
  ) {
    super();
    (this.message = message),
      (this.explanation = explanation),
      (this.name = name),
      (this.statusCode = statusCode);
  }
}

module.exports = AppErrors;
