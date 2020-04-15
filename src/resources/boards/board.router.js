const router = require("express").Router();
const boardsService = require("./board.service");
const RequestError = require("../../common/requestError");

router.route("/").get(async (req, res, next) => {
  try {
    const boards = await boardsService.getAllBoards();
    res.json(boards);
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
    const board = await boardsService.getBoardById(req.params.id);
    if (!board) {
      throw new RequestError(404, "Board not found");
    }
    res.json(board);
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/").post(async (req, res, next) => {
  try {
    const board = await boardsService.createBoard(req.body);
    res.json(board);
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
    const boards = await boardsService.updateBoard(req.params.id, req.body);
    res.json(boards);
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/:id").delete(async (req, res, next) => {
  try {
    const boards = await boardsService.deleteBoard(req.params.id);
    res.json(boards);
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
