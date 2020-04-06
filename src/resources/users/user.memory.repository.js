const fs = require("fs");
const path = require("path");
const User = require("./user.model");

const getAllUsers = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "../../public/users.json"),
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      }
    );
  });
};

const getUserById = async id => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "../../public/users.json"),
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data).find(user => user.id === id));
        }
      }
    );
  });
};

const createUser = async user => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "../../public/users.json"),
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          const dataWithNewUser = JSON.stringify([
            ...JSON.parse(data),
            new User(user)
          ]);

          fs.writeFile(
            path.join(__dirname, "../../public/users.json"),
            dataWithNewUser,
            () => {
              resolve();
            }
          );
        }
      }
    );
  });
};

const updateUser = async (id, user) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "../../public/users.json"),
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          const parsedData = JSON.parse(data);
          const userIndex = parsedData.findIndex(
            userData => userData.id === id
          );
          parsedData.splice(userIndex, 1, new User(user));
          const updatedData = JSON.stringify(parsedData);

          fs.writeFile(
            path.join(__dirname, "../../public/users.json"),
            updatedData,
            () => {
              resolve();
            }
          );
        }
      }
    );
  });
};

const deleteUser = async id => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "../../public/users.json"),
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          const parsedData = JSON.parse(data);
          const userIndex = parsedData.findIndex(
            userData => userData.id === id
          );
          parsedData.splice(userIndex, 1);
          const updatedData = JSON.stringify(parsedData);

          fs.writeFile(
            path.join(__dirname, "../../public/users.json"),
            updatedData,
            () => {
              resolve();
            }
          );
        }
      }
    );
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
