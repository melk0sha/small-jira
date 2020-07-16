const Board = require("./board.model");

const getAllBoards = async () => {
  return Board.find({});
};

const getBoardById = async id => {
  return Board.findOne({ _id: id });
};

const createBoard = async newBoard => {
  return Board.create(newBoard);
};

const updateBoard = async (id, newBoard) => {
  return Board.findOneAndUpdate({ _id: id }, newBoard);
};

const deleteBoard = async id => {
  return Board.deleteOne({ _id: id });
};

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
