const { PORT } = require("./common/config");
const app = require("./app");
const logger = require("./common/logger");

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);

process.on("uncaughtException", err => {
  const exit = process.exit;
  const message = {
    type: "Uncaught Exception",
    msg: err.message,
    stack: err.stack
  };

  logger.error(message);
  logger.on("finish", () => exit(1));
});

process.on("unhandledRejection", reason => {
  const exit = process.exit;
  const message = {
    type: "Unhandled Rejection",
    msg: reason.message,
    reason
  };

  logger.error(message);
  logger.on("finish", () => exit(1));
});
