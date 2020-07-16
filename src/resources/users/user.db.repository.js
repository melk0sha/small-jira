const User = require("./user.model");

const getAllUsers = async () => {
  return User.find({});
};

const getUserById = async id => {
  return User.findOne({ _id: id });
};

const createUser = async newUser => {
  return User.create(newUser);
};

const updateUser = async (id, newUser) => {
  return User.findOneAndUpdate({ _id: id }, newUser);
};

const deleteUser = async id => {
  return User.remove({ _id: id }).n !== 0;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
