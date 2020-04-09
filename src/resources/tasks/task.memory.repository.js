const Task = require("./task.model");

const tasks = [];

tasks.push(
  new Task({
    title: "Task1",
    order: "0",
    description: "TaskDescription1",
    userId: "1",
    boardId: "1",
    columnId: "1"
  })
);
tasks.push(
  new Task({
    title: "Task2",
    order: "1",
    description: "TaskDescription2",
    userId: "1",
    boardId: "1",
    columnId: "1"
  })
);
tasks.push(
  new Task({
    title: "Task3",
    order: "2",
    description: "TaskDescription3",
    userId: "1",
    boardId: "1",
    columnId: "1"
  })
);

const getAllTasks = async boardId => {
  return tasks.filter(task => task.boardId === boardId);
};

const getTaskById = async id => {
  const taskById = tasks.find(task => task.id === id);
  if (!taskById) {
    return;
  }

  return taskById;
};

const createTask = async (boardId, newTask) => {
  if (!newTask.title || !newTask.description) {
    return;
  }
  const task = new Task(newTask);
  task.boardId = boardId;
  tasks.push(task);

  return task;
};

const updateTask = async (id, newTask) => {
  if (!newTask.title || !newTask.description) {
    return;
  }
  const taskIndex = tasks.findIndex(task => task.id === id);
  tasks.splice(taskIndex, 1, new Task(newTask));

  return tasks;
};

const deleteTask = async id => {
  const taskToDelete = await getTaskById(id);
  if (!taskToDelete) {
    return;
  }
  const taskIndex = tasks.findIndex(task => task.id === id);
  tasks.splice(taskIndex, 1);

  return tasks;
};

module.exports = {
  tasks,
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
