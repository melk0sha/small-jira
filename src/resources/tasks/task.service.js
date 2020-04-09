const tasksRepo = require("./task.memory.repository");

const getAllTasks = boardId => tasksRepo.getAllTasks(boardId);
const getTaskById = id => tasksRepo.getTaskById(id);
const createTask = (boardId, data) => tasksRepo.createTask(boardId, data);
const updateTask = (id, data) => tasksRepo.updateTask(id, data);
const deleteTask = id => tasksRepo.deleteTask(id);

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
