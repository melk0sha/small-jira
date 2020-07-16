const router = require("express").Router();
const Task = require("./task.model");
const tasksService = require("./task.service");
const RequestError = require("../../common/requestError");

router.route("/:boardId/tasks").get(async (req, res, next) => {
  try {
    const tasks = await tasksService.getTasksByBoardId(req.params.boardId);

    res.json(tasks.map(Task.toResponse));
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/:boardId/tasks/:taskId").get(async (req, res, next) => {
  try {
    const task = await tasksService.getTaskById(req.params.taskId);

    if (!task) {
      throw new RequestError(404, "Task not found");
    }

    res.json(Task.toResponse(task));
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/:boardId/tasks").post(async (req, res, next) => {
  try {
    const task = await tasksService.createTask(req.params.boardId, req.body);

    if (!task) {
      throw new RequestError(400, "Bad request");
    }

    res.json(Task.toResponse(task));
    return next();
  } catch (err) {
    return next(err);
  }
});

router.route("/:boardId/tasks/:taskId").put(async (req, res, next) => {
  try {
    const task = await tasksService.updateTask(req.params.taskId, req.body);

    if (!task) {
      throw new RequestError(400, "Bad request");
    }

    res.json(Task.toResponse(task));
  } catch (err) {
    return next(err);
  }
});

router.route("/:boardId/tasks/:taskId").delete(async (req, res, next) => {
  try {
    const task = await tasksService.deleteTask(req.params.taskId);

    if (!task) {
      throw new RequestError(404, "Task not Found");
    }

    res.status(204).send();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
