const router = require("express").Router();
// const Task = require("./task.model");
const tasksService = require("./task.service");

router.route("/").get(async (req, res) => {
  const tasks = await tasksService.getAllTasks();
  res.json(tasks);
});

router.route("/:id").get(async (req, res) => {
  const task = await tasksService.getTaskById(req.params.id);
  res.json(task);
});

router.route("/").post(async (req, res) => {
  await tasksService.createTask(req.body);
  if (req.body) {
    res.status(200).send("The user has been created");
  } else {
    res.status(400).send("Bad request");
  }
  // res.status(401)
});

router.route("/:id").put(async (req, res) => {
  await tasksService.updateTask(req.params.id, req.body);
  if (req.body) {
    res.status(200).send("The user has been updated");
  } else {
    res.status(400).send("Bad request");
  }
  // res.status(401)
});

router.route("/:id").delete(async (req, res) => {
  await tasksService.deleteTask(req.params.id);
  if (req.body) {
    res.status(200).send("The user has been deleted");
  } else {
    res.status(400).send("Bad request");
  }
  // res.status(401)
});

module.exports = router;
