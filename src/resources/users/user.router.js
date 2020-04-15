const router = require("express").Router();
const User = require("./user.model");
const usersService = require("./user.service");
const RequestError = require("../../common/requestError");

router.route("/").get(async (req, res, next) => {
  try {
    const users = await usersService.getAllUsers();
    res.json(users.map(User.toResponse));
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/:id").get(async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw new RequestError(400, "ID not found");
    }

    const user = await usersService.getUserById(req.params.id);
    if (!user) {
      throw new RequestError(404, "User not found");
    }

    res.json(User.toResponse(user));
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/").post(async (req, res, next) => {
  try {
    const user = await usersService.createUser(req.body);

    res.json(User.toResponse(user));
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/:id").put(async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw new RequestError(400, "ID not found");
    }

    const users = await usersService.updateUser(req.params.id, req.body);
    res.json(users.map(User.toResponse));
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/:id").delete(async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw new RequestError(400, "ID not found");
    }

    const users = await usersService.deleteUser(req.params.id);
    if (!users) {
      throw new RequestError(404, "User not found");
    }

    res.json(users.map(User.toResponse));
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
