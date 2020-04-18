const mongoose = require("mongoose");
const { MONGO_CONNECTION_STRING } = require("../common/config");

// const User = require("../resources/users/user.model");
// const Board = require("../resources/boards/board.model");
// const Task = require("../resources/tasks/task.model");

// const userSchema = new mongoose.Schema({
//   name: String
// });
// const User = mongoose.model("User", userSchema);
// const david = new User({ name: "David" });
// console.log(david.name);

const connectToDb = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("we're connected!");
    db.dropDatabase();
    cb();
  });
};

module.exports = connectToDb;
