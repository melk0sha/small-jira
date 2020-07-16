const router = require("express").Router();
const Board = require("./board.model");
const boardsService = require("./board.service");
const taskService = require("../tasks/task.service");
const RequestError = require("../../common/requestError");

router.route("/").get(async (req, res, next) => {
  try {
    const boards = await boardsService.getAllBoards();

    res.json(boards.map(Board.toResponse));
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

    res.json(Board.toResponse(board));
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/").post(async (req, res, next) => {
  try {
    const board = await boardsService.createBoard(req.body);

    if (!board) {
      throw new RequestError(400, "Bad request");
    }

    res.json(Board.toResponse(board));
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/:id").put(async (req, res, next) => {
  try {
    const board = await boardsService.updateBoard(req.params.id, req.body);

    if (!board) {
      throw new RequestError(400, "Bad request");
    }

    res.json(Board.toResponse(board));
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/:id").delete(async (req, res, next) => {
  try {
    const boards = await boardsService.deleteBoard(req.params.id);
    const tasks = await taskService.deleteTasksByBoardId(req.params.id);

    if (!boards || !tasks) {
      throw new RequestError(400, "Bad request");
    }

    res.status(204).send();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
