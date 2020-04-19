const { PORT } = require("./common/config");
const app = require("./app");
const logger = require("./common/logger");
const connectToDb = require("./db/connect.db");

connectToDb(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});

process.on("uncaughtException", err => {
  const exit = process.exit;

  logger.error(`Uncaught Exception: ${err.message}`);
  logger.on("finish", () => exit(1));
});

process.on("unhandledRejection", reason => {
  const exit = process.exit;

  logger.error(`Unhandled Rejection: ${reason.message}`);
  logger.on("finish", () => exit(1));
});
