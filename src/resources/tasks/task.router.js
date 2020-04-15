const router = require("express").Router();
const tasksService = require("./task.service");
const RequestError = require("../../common/requestError");

router.route("/").get(async (req, res, next) => {
  try {
    const boardId = req.baseUrl.split("/")[2];
    const tasks = await tasksService.getAllTasks(boardId);
    res.json(tasks);
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

    const task = await tasksService.getTaskById(req.params.id);
    if (!task) {
      throw new RequestError(404, "Task not found");
    }

    res.json(task);
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/").post(async (req, res, next) => {
  try {
    const boardId = req.baseUrl.split("/")[2];

    if (!boardId) {
      throw new RequestError(400, "ID not found");
    }

    const task = await tasksService.createTask(boardId, req.body);
    res.json(task);
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/:id").put(async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw new RequestError(400, "Id not found");
    }

    const tasks = await tasksService.updateTask(req.params.id, req.body);
    res.json(tasks);
  } catch (err) {
    return next(err);
  }
});

router.route("/:id").delete(async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw new RequestError(400, "ID not found");
    }

    const tasks = await tasksService.deleteTask(req.params.id);
    if (!tasks) {
      throw new RequestError(404, "Task not Found");
    }

    res.json(tasks);
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
