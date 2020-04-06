const router = require("express").Router();
const boardsService = require("./board.service");

router.route("/").get(async (req, res) => {
  const boards = await boardsService.getAllBoards();
  res.json(boards);
});

router.route("/:id").get(async (req, res) => {
  const board = await boardsService.getBoardById(req.params.id);
  res.json(board);
});

router.route("/").post(async (req, res) => {
  await boardsService.createBoard(req.body);
  if (req.body) {
    res.status(200).send("The board has been created");
  } else {
    res.status(400).send("Bad request");
  }
  // res.status(401)
});

router.route("/:id").put(async (req, res) => {
  await boardsService.updateBoard(req.params.id, req.body);
  if (req.body) {
    res.status(200).send("The user has been updated");
  } else {
    res.status(400).send("Bad request");
  }
  // res.status(401)
});

router.route("/:id").delete(async (req, res) => {
  await boardsService.deleteBoard(req.params.id);
  if (req.body) {
    res.status(200).send("The user has been deleted");
  } else {
    res.status(400).send("Bad request");
  }
  // res.status(401)
});

module.exports = router;
