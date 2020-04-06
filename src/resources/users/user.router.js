const router = require("express").Router();
const User = require("./user.model");
const usersService = require("./user.service");

router.route("/").get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route("/:id").get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.json(User.toResponse(user));
});

router.route("/").post(async (req, res) => {
  await usersService.create(req.body);
  if (req.body) {
    res.status(200).send("The user has been created");
  } else {
    res.status(400).send("Bad request");
  }
  // res.status(401)
});

router.route("/:id").put(async (req, res) => {
  await usersService.update(req.params.id, req.body);
  if (req.body) {
    res.status(200).send("The user has been updated");
  } else {
    res.status(400).send("Bad request");
  }
  // res.status(401)
});

router.route("/:id").delete(async (req, res) => {
  await usersService.deleteUser(req.params.id);
  if (req.body) {
    res.status(200).send("The user has been deleted");
  } else {
    res.status(400).send("Bad request");
  }
  // res.status(401)
});

module.exports = router;
