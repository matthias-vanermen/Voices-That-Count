class DistributionChart extends Chart {
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

  createChartXML() {
    // XML-methode van Wout.
  }
}
