const usersRepo = require("./user.db.repository");

const getAllUsers = () => usersRepo.getAllUsers();
const getUserById = id => usersRepo.getUserById(id);
const createUser = data => usersRepo.createUser(data);
const updateUser = (id, data) => usersRepo.updateUser(id, data);
const deleteUser = id => usersRepo.deleteUser(id);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
