class SimplebarChart extends Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,
    color = "#00f", //default color; override with setColor()-method
    percentage = "false",
    datafield,
    orientation = "vertical",
    leftmargin,
    rightmargin = "30",
    filtername,
    itemList
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    this.color = color;
    this.percentage = percentage;
    this.datafield = datafield;
    this.orientation = orientation;
    this.leftmargin = leftmargin;
    this.rightmargin = rightmargin;
    this.filtername = filtername;
    this.itemList = itemList;
  }

  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }

  setPercentage(percentage) {
    this.percentage = percentage;
  }
  getPercentage() {
    return this.percentage;
  }

  setDatafield(datafield) {
    this.datafield = datafield;
  }
  getDatafield() {
    return this.datafield;
  }

  setOrientation(orientation) {
    this.orientation = orientation;
  }
  getOrientation() {
    return this.orientation;
  }

  setLeftmargin(leftmargin) {
    this.leftmargin = leftmargin;
  }
  getLeftmargin() {
    return this.leftmargin;
  }

  setRightmargin(rightmargin) {
    this.rightmargin = rightmargin;
  }
  getRightmargin() {
    return this.rightmargin;
  }

  setFiltername(filtername) {
    this.filtername = filtername;
  }
  getFiltername() {
    return this.filtername;
  }

  addItem(value, label) {
    var tempArray = [];
    tempArray.push(value, label);
    this.itemList.push(tempArray);
  }

  getItems() {
    return this.itemList;
  }

  deleteItem(label) {
    for (var i = 0; i < this.itemList.length; i ++) {
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
