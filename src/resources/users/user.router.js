const router = require("express").Router();
const User = require("./user.model");
const usersService = require("./user.service");

router.route("/").get(async (req, res) => {
  const users = await usersService.getAllUsers();
  res.json(users.map(User.toResponse));
});

router.route("/:id").get(async (req, res) => {
  const user = await usersService.getUserById(req.params.id);
  if (!req.params.id) {
    res.status(400).send("Bad request");
  } else if (!user) {
    res.status(404).send("Not Found");
  } else {
    res.json(User.toResponse(user));
  }
});

router.route("/").post(async (req, res) => {
  const user = await usersService.createUser(req.body);
  if (!req.body) {
    res.status(400).send("Bad request");
  } else if (!user) {
    res.status(404).send("Not Found");
  } else {
    res.json(User.toResponse(user));
  }
});

router.route("/:id").put(async (req, res) => {
  const users = await usersService.updateUser(req.params.id, req.body);
  if (!req.body) {
    res.status(400).send("Bad request");
  } else if (!users) {
    res.status(404).send("Not Found");
  } else {
    res.json(users.map(User.toResponse));
  }
});

router.route("/:id").delete(async (req, res) => {
  const users = await usersService.deleteUser(req.params.id);
  if (!req.params.id) {
    res.status(400).send("Bad request");
  } else if (!users) {
    res.status(404).send("Not Found");
  } else {
    res.json(users.map(User.toResponse));
  }
});

module.exports = router;
