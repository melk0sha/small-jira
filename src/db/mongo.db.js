const mongoose = require("mongoose");
const { MONGO_CONNECTION_STRING } = require("../common/config");

// const User = require("../resources/users/user.model");
// const Board = require("../resources/boards/board.model");
// const Task = require("../resources/tasks/task.model");

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("opened");
});

// const userSchema = new mongoose.Schema({
//   name: String
// });
// const User = mongoose.model("User", userSchema);
// const david = new User({ name: "David" });
// console.log(david.name);
