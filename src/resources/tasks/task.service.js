const tasksRepo = require("./task.db.repository");

const getTasksByBoardId = boardId => tasksRepo.getTasksByBoardId(boardId);
const getTaskById = id => tasksRepo.getTaskById(id);
const createTask = (boardId, data) => {
  data.boardId = boardId;
  return tasksRepo.createTask(data);
};
const updateTask = (id, data) => tasksRepo.updateTask(id, data);
const deleteTask = id => tasksRepo.deleteTask(id);
const deleteUserTasks = userId => tasksRepo.deleteUserTasks(userId);
const deleteTasksByBoardId = boardId => tasksRepo.deleteTasksByBoardId(boardId);

module.exports = {
  getTasksByBoardId,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteUserTasks,
  deleteTasksByBoardId
};
