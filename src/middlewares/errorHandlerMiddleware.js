const logger = require("../common/logger");

const errorHandlerMiddleware = (err, req, res) => {
  const { statusCode, message } = err;
  const { method, url } = req;

  logger.error(
    `METHOD: ${method} --|-- URL: ${url} --|-- STATUS: ${statusCode ||
      500} --|-- MESSAGE: ${message || err.message}`
  );

  if (statusCode) {
    res.status(statusCode).json({ message });
  } else {
    res.status(500).json(err.message);
  }
};

module.exports = errorHandlerMiddleware;
