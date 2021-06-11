const chart = require("../chart");

class SimplebarChart extends chart.Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,

    color,
    percentage,
    datafield,
    orientation,
    leftmargin,
    rightmargin,
    filtername,
    itemList
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    if (color == "") {
      //default color; override with setColor()-method
      this.color = "#00f";
    } else this.color = color;
    if (percentage == "") {
      this.percentage = "false";
    } else this.percentage = percentage;
    this.datafield = datafield;

    if (orientation == "") {
      this.orientation = "vertical";
    } else this.orientation = orientation;
    this.leftmargin = leftmargin;

    if (rightmargin == "") {
      this.rightmargin = "30";
    } else this.rightmargin = rightmargin;
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
    for (var i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i][1] == label) {
        this.itemList.splice(i, 1);
        i--;
      }
    }
  }

  createChartXML(root) {
    // XML-methode van Wout.
    root2 = root.ele("simplebarchart")
      //deze attributen krijg ik nergens data van
      .att('row', this.row)
      .att('column', this.column)
      .att('title', this.title)
      .att('icon', this.icon)
      //attributen
      .att('color', this.getColor())
      .att('percentage', this.getPercentage())
      .att('datafield', this.getDatafield())
      .att('filtername', this.getDatafield())
      .att('leftmargin', this.getLeftmargin())
      .att('rightmargin', this.getRightmargin());
      for (l = 0; l < getItems().length; l++) {
        root2.ele('item', {value: this.getItems[l][0], label: this.getItems[l][1]}).up();
      }
  }
}

module.exports = { SimplebarChart };
