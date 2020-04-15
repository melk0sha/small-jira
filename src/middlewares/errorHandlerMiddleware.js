const logger = require("../common/logger");

const errorHandlerMiddleware = (err, req, res) => {
  const { statusCode, message } = err;
  const { method, url } = req;

  logger.error(
    `METHOD: ${method} --|-- URL: ${url} --|-- STATUS: ${statusCode ||
      500} --|-- MESSAGE: ${message}`
  );

  res.status(statusCode ? statusCode : 500).json({ message });
};

module.exports = errorHandlerMiddleware;
