const router = require("express").Router();
const tasksService = require("./task.service");

router.route("/").get(async (req, res) => {
  const boardId = req.baseUrl.split("/")[2];
  const tasks = await tasksService.getAllTasks(boardId);
  res.json(tasks);
});

router.route("/:id").get(async (req, res) => {
  const task = await tasksService.getTaskById(req.params.id);
  if (!req.params.id) {
    res.status(400).send("Bad request");
  } else if (!task) {
    res.status(404).send("Not Found");
  } else {
    res.json(task);
  }
});

router.route("/").post(async (req, res) => {
  const boardId = req.baseUrl.split("/")[2];
  if (!boardId) {
    res.status(400).send("Bad request");
  }

  const task = await tasksService.createTask(boardId, req.body);

  if (!req.body) {
    res.status(400).send("Bad request");
  } else if (!task) {
    res.status(404).send("Not Found");
  } else {
    res.json(task);
  }
});

router.route("/:id").put(async (req, res) => {
  const tasks = await tasksService.updateTask(req.params.id, req.body);
  if (!req.body) {
    res.status(400).send("Bad request");
  } else if (!tasks) {
    res.status(404).send("Not Found");
  } else {
    res.json(tasks);
  }
});

router.route("/:id").delete(async (req, res) => {
  const tasks = await tasksService.deleteTask(req.params.id);
  if (!req.params.id) {
    res.status(400).send("Bad request");
  } else if (!tasks) {
    res.status(404).send("Not Found");
  } else {
    res.json(tasks);
  }
});

module.exports = router;
