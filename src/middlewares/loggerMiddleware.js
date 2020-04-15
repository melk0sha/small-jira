const logger = require("../common/logger");
const isEmptyObj = require("../utils/isEmptyObj");
const getQueryUrl = require("../utils/getQueryUrl");

const EMPTY = "empty";

const loggerMiddleware = req => {
  const { url, query, body } = req;

  const urlStr = getQueryUrl(url);
  const queryStr = isEmptyObj(query) ? EMPTY : JSON.stringify(query);
  const bodyStr = isEmptyObj(body) ? EMPTY : JSON.stringify(body);

  logger.info(
    `URL: ${urlStr} --|-- QUERY PARAMS: ${queryStr} --|-- REQUEST BODY: ${bodyStr}`
  );
};

module.exports = loggerMiddleware;
