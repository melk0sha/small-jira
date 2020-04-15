class RequestError extends Error {
  constructor(statusCode = 404, message = "Not Found") {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = RequestError;
