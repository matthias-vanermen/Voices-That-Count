const chart = require("../chart");

class DistributionChart extends chart.Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,

    color,
    datafield,
    labelempty,
    colorempty,
    itemList
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    if (color == "") {
      //default color; override with setColor()-method
      this.color = "#00f";
    } else this.color = color;
    this.datafield = datafield;
    this.labelempty = labelempty;
    this.colorempty = colorempty;
    this.itemList = itemList;
  }

  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }

  setDatafield(datafield) {
    this.datafield = datafield;
  }
  getDatafield() {
    return this.datafield;
  }

  setLabelempty(labelempty) {
    this.labelempty = labelempty;
  }

  getLabelempty() {
    return this.labelempty;
  }

  setColorempty(colorempty) {
    this.colorempty = colorempty;
  }

  getColorempty() {
    return this.colorempty;
  }

  addItem(value, label, color) {
    var tempArray = [];
    tempArray.push(value, label, color);
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
    root2 = root.ele("distributionchart")
      .att('row', this.row)
      .att('rowspan', this.rowspan)
      .att('column', this.column)
      .att('columnspan', this.rowspan)
      .att('title', this.title)
      .att('icon', this.icon)
      .att('labelempty', this.getLabelempty())
      .att('colorempty', this.getColorempty())
      .att('datafield', this.getDatafield())
      for (l = 0; l < getItems().length; l++) {
        root2.ele('item', {value: this.getItems[l][0], label: this.getItems[l][1], color: this.getItems[l][2]}).up();
      }




    /* 
    <distributionchart row="5" column="3" columnspan="2" title="Distribution demo" icon="home" color="#499894" labelempty="Geen mening" colorempty="#000000" datafield="M3Emotie">
        <itemvalue="Positief" label="Positief" color="#00ff00"></item>
        <itemvalue="Negatief" label="Negatief" color="#ff0000"></item>
        <itemvalue="Gemengd gevoel" label="Gemengd gevoel" color="#0000ff"></item>
    </distributionchart>
    */
  }
}

module.exports = { DistributionChart };
