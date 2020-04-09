const User = require("./user.model");
const { tasks } = require("../tasks/task.memory.repository");

const users = [];

users.push(new User("1", "Diana", "Diana1337", "g3454yfdfyh"));
users.push(new User("2", "Andrey", "Andrey1337", "346fdfujhg"));
users.push(new User("3", "Alexey", "Alexey1337", "fdsgtfju777"));

const getAllUsers = async () => {
  return users;
};

const getUserById = async id => {
  const userById = users.find(user => user.id === id);
  if (!userById) {
    return;
  }

  return userById;
};

const createUser = async newUser => {
  if (!newUser.login || !newUser.password) {
    return;
  }
  const user = new User(newUser);
  users.push(user);

  return user;
};

const updateUser = async (id, newUser) => {
  if (!newUser.login || !newUser.password) {
    return;
  }
  const userIndex = users.findIndex(user => user.id === id);
  users.splice(userIndex, 1, new User(newUser));

  return users;
};

const deleteUser = async id => {
  const userToDelete = await getUserById(id);
  if (!userToDelete) {
    return;
  }
  updateTasks(id);
  const userIndex = users.findIndex(user => user.id === id);
  users.splice(userIndex, 1);

  return users;
};

const updateTasks = async id => {
  tasks.forEach(task => {
    if (task.userId === id) {
      task.userId = null;
    }
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
