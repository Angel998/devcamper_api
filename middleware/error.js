const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  // Log to console for dev
  // console.log(err.stack);

  //console.log(err);

  let customErr = { ...err };
  let message = customErr.message;
  let statusCode = 500;

  customErr.message = message;

  // Mongoose bad Object ID
  if (err.name === "CastError") {
    message = `Resource not found with id of ${err.value}`;
    statusCode = 404;
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    message = "Duplicate field value entired";
    statusCode = 400;
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    message = Object.values(err.errors).map(val => val.message);
    statusCode = 400;
  }

  customErr = new ErrorResponse(message, statusCode);

  res.status(customErr.statusCode || 500).json({
    success: false,
    data: {},
    error: customErr.message || "Ocurrio un error inesperado"
  });
};

module.exports = errorHandler;
