class MultiplechoiceBarchart extends Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,

    color,
    percentage,
    orientation,
    leftmargin,
    rightmargin,
    filtername,
    multipletopicitem
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    if (color == "") {
      //default color; override with setColor()-method
      this.color = "#00f";
    } else this.color = color;
    if (percentage == "") {
      this.percentage = "false";
    } else this.percentage = percentage;
    if (orientation == "") {
      this.orientation = "vertical";
    } else this.orientation = orientation;
    this.leftmargin = leftmargin;
    if (rightmargin == "") {
      this.rightmargin = "30";
    } else this.rightmargin = rightmargin;
    this.filtername = filtername;
    this.multipletopicitem = multipletopicitem;
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

  addItem(columnname, label, color) {
    var tempArray = [];
    tempArray.push(columnname, label, color);
    this.multipletopicitem.push(tempArray);
  }

  getItems() {
    return this.multipletopicitem;
  }

  deleteItem(label) {
    for (var i = 0; i < this.multipletopicitem.length; i++) {
      if (this.multipletopicitem[i][1] == label) {
        this.multipletopicitem.splice(i, 1);
        i--;
      }
    }
  }

  createChartXML() {
    // XML-methode van Wout.
    /*

        <multiplechoicebarchart row="1" column="1" columnspan="2" title="Verhalen" icon="icons" percentage="true" orientation="horizontal" 
        color="#FFA522" leftmargin="220" filtername="ideeën hebben te maken met...">
            <multipletopicitem columnname="naam_kolom_1" label="Praktische zorgnoden"></multipletopicitem>
            <multipletopicitem columnname="naam_kolom_1" label="Praktische zorgnoden"></multipletopicitem>
        </multiplechoicebarchart>
        */
  }
}
