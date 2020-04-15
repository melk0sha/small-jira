const path = require("path");
const { createLogger, format, transports } = require("winston");

console.log(path.resolve(__dirname, "../../logs/info.log"));
const logger = createLogger({
  level: "silly",
  format: format.combine(format.uncolorize(), format.json()),
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.cli())
    }),
    new transports.File({
      filename: path.resolve(__dirname, "../../logs/errors.log"),
      level: "error"
    }),
    new transports.File({
      filename: path.resolve(__dirname, "../../logs/info.log"),
      level: "info"
    })
  ]
});
module.exports = logger;
