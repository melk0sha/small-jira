const tasksRepo = require("./task.memory.repository");

const getAllTasks = () => tasksRepo.getAllTasks();
const getTaskById = id => tasksRepo.getTaskById(id);
const createTask = data => tasksRepo.createTask(data);
const updateTask = (id, data) => tasksRepo.updateTask(id, data);
const deleteTask = id => tasksRepo.deleteTask(id);

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
