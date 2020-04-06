const uuid = require("uuid");

class Board {
  constructor({
    id = uuid(),
    title = "Board title",
    columns = [new Column()]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(column => new Column(column));
  }

  addColumn(column) {
    const [columns] = this;
    this.columns = [...columns, new Column(column)];
  }
}

class Column {
  constructor({ id = uuid(), title = "Board title", order } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Board;
