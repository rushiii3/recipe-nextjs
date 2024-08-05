const ErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
    statuscode: statusCode,
    status: false,
  });
};

module.exports = ErrorHandler;