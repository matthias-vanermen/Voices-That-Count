const chart = require("../chart");

class PolarChart extends chart.Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,

    color,
    groupby,
    itemList
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    if (color == "") {
      //default color; override with setColor()-method
      this.color = "#00f";
    } else this.color = color;
    if (groupby == "") {
      this.groupby = "false";
    } else this.groupby = groupby;
    this.itemList = itemList;
  }

  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }

  setGroupBy(groupby) {
    this.groupby = groupby;
  }
  getGroupby() {
    return this.groupby;
  }

  addItem(columnname, label, color) {
    var tempArray = [];
    tempArray.push(columnname, label, color);
    this.itemList.push(tempArray);
  }

  getItems() {
    return this.itemList;
  }

  deleteItem(label) {
    for (var i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i][1] == label) {
        this.itemList.splice(i, 1);
        i--;
      }
    }
  }

  createChartXML(root) {
    root2 = root.ele("polarbarchart")
      .att('row', this.row)
      .att('rowspan', this.rowspan)
      .att('column', this.column)
      .att('columnspan', this.rowspan)
      .att('title', this.title)
      .att('icon', this.icon)
      .att('groupby', this.getGroupby())
      for (l = 0; l < getItems().length; l++) {
        root2.ele('item', {columnname: this.getItems[l][0], label: this.getItems[l][1], color: this.getItems[l][2]}).up();
      }
  }
}

module.exports = { PolarChart };
