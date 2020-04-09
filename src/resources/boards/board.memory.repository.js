const Board = require("./board.model");
const { tasks } = require("../tasks/task.memory.repository");

const boards = [];

boards.push(
  new Board({
    title: "Board1",
    columns: [
      {
        title: "Column11",
        order: "0"
      },
      {
        title: "Column12",
        order: "1"
      }
    ]
  })
);
boards.push(
  new Board({
    title: "Board2",
    columns: [
      {
        title: "Column21",
        order: "0"
      },
      {
        title: "Column22",
        order: "1"
      },
      {
        title: "Column23",
        order: "2"
      }
    ]
  })
);

const getAllBoards = async () => {
  return boards;
};

const getBoardById = async id => {
  const boardById = boards.find(board => board.id === id);
  if (!boardById) {
    return;
  }

  return boardById;
};

const createBoard = async newBoard => {
  if (!newBoard.title || !newBoard.columns) {
    return;
  }
  const board = new Board(newBoard);
  boards.push(board);

  return board;
};

const updateBoard = async (id, newBoard) => {
  if (!newBoard.title || !newBoard.columns) {
    return;
  }
  const boardIndex = boards.findIndex(board => board.id === id);
  boards.splice(boardIndex, 1, new Board(newBoard));

  return boards;
};

const deleteBoard = async id => {
  const boardToDelete = await getBoardById(id);
  if (!boardToDelete) {
    return;
  }
  deleteTasks(id);
  const boardIndex = boards.findIndex(board => board.id === id);
  boards.splice(boardIndex, 1);

  return boards;
};

const deleteTasks = async id => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].boardId === id) {
      tasks.splice(i, 1);
      i--;
    }
  }
};

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
