class RequestError extends Error {
  constructor(status = 404, message = "Not found") {
    super();
    this.message = message;
    this.status = status;
  }
}

module.exports = RequestError;
