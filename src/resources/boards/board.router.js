const router = require("express").Router();
const boardsService = require("./board.service");

router.route("/").get(async (req, res) => {
  const boards = await boardsService.getAllBoards();
  res.json(boards);
});

router.route("/:id").get(async (req, res) => {
  const board = await boardsService.getBoardById(req.params.id);
  if (!req.params.id) {
    res.status(400).send("Bad request");
  } else if (!board) {
    res.status(404).send("Not Found");
  } else {
    res.json(board);
  }
});

router.route("/").post(async (req, res) => {
  const board = await boardsService.createBoard(req.body);
  if (!req.body) {
    res.status(400).send("Bad request");
  } else if (!board) {
    res.status(404).send("Not Found");
  } else {
    res.json(board);
  }
});

router.route("/:id").put(async (req, res) => {
  const boards = await boardsService.updateBoard(req.params.id, req.body);
  if (!req.params.id || !req.body) {
    res.status(400).send("Bad request");
  } else if (!boards) {
    res.status(404).send("Not Found");
  } else {
    res.json(boards);
  }
});

router.route("/:id").delete(async (req, res) => {
  const boards = await boardsService.deleteBoard(req.params.id);
  if (!req.params.id) {
    res.status(400).send("Bad request");
  } else if (!boards) {
    res.status(404).send("Not Found");
  } else {
    res.json(boards);
  }
});

module.exports = router;
