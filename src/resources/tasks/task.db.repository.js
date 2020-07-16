const Task = require("./task.model");

const getTasksByBoardId = async id => {
  return Task.find({ boardId: id });
};

const getTaskById = async id => {
  return Task.findOne({ _id: id });
};

const createTask = async newTask => {
  return Task.create(newTask);
};

const updateTask = async (id, newTask) => {
  return Task.findOneAndUpdate({ _id: id }, newTask);
};

const deleteTask = async id => {
  return Task.deleteOne({ _id: id });
};

const deleteUserTasks = async id => {
  await Task.updateMany({ userId: id }, { userId: null });
  return true;
};

const deleteTasksByBoardId = async id => {
  await Task.deleteMany({ boardId: id });
  return true;
};

module.exports = {
  getTasksByBoardId,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteUserTasks,
  deleteTasksByBoardId
};
