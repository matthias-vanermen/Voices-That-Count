class Chart {
  constructor(row, column, rowspan, columnspan, title, icon) {
    this.row = row;
    this.column = column;
    this.rowspan = rowspan;
    this.columnspan = columnspan;
    this.title = title;
    this.icon = icon;
  }

  setRow(row) {
    this.row = row;
  }

  getRow() {
    return this.row;
  }

  setColumn(column) {
    this.column = column;
  }

  getColumn() {
    return this.column;
  }

  setRowspan(rowspan) {
    this.rowspan = rowspan;
  }
  getRowspan() {
    return this.rowspan;
  }

  setcolumnspan(columnspan) {
    this.columnspan = columnspan;
  }
  getcolumnspan() {
    return this.columnspan;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setIcon(icon) {
    this.icon = icon;
  }
  getIcon() {
    return this.icon;
  }
}

// Use this class: let myChart = new Chart(0, 0, 1, 1, "Title", "coffee");
// Chart heeft vele onderliggende child-classes; deze classes zullen "inheritten" van de parent-class: Chart
