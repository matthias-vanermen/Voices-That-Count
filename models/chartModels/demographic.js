class DemographicChart extends Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,
    color = "#00f", //default color; override with setColor()-method
    itemList
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    this.color = color;
    this.itemList = itemList;
  }

  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
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

  createChartXML() {
    // XML-methode van Wout.

    /*

    <demographic row="4" column="1" columnspan="4" title="Demographic" icon="home" color="#499894">
        <itemdatafield="D13Geslacht" name="Geslacht"></item>
        <itemdatafield="D12Leeftijd" name="Leeftijd"></item>
        <itemdatafield="D14HoeLangInStraat" name="Hoe lang in straat"></item>
        <itemdatafield="D15VerhaalGeschrevenAls" name="Gezinssituatie"></item>
    </demographic>
    */
  }
}
