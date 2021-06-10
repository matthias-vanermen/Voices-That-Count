class MultiplechoiceBarchart extends Chart {
    constructor(
      row,
      column,
      rowspan,
      columnspan,
      title,
      icon,
      color = "#00f", //default color; override with setColor()-method
      percentage = "false",
      orientation = "vertical",
      leftmargin,
      rightmargin = "30",
      filtername,
      multiplechoiceitem
    ) {
      super(row, column, rowspan, columnspan, title, icon);
      this.color = color;
      this.percentage = percentage;
      this.orientation = orientation;
      this.leftmargin = leftmargin;
      this.rightmargin = rightmargin;
      this.filtername = filtername;
      this.multiplechoiceitem = multiplechoiceitem;
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
  
    addItem(columnname, label) {
      var tempArray = [];
      tempArray.push(columnname, label);
      this.multiplechoiceitem.push(tempArray);
    }
  
    getItems() {
      return this.multiplechoiceitem;
    }
  
    deleteItem(label) {
      for (var i = 0; i < this.multiplechoiceitem.length; i ++) {
          if (this.multiplechoiceitem[i][1] == label) {
            this.multiplechoiceitem.splice(i, 1);
            i--;
          }
        }
    }
  
    createChartXML() {
        // XML-methode van Wout.

        /*

        <multiplechoicebarchart row="1" column="1" columnspan="2" title="Verhalen" icon="icons" percentage="true" orientation="horizontal" 
        color="#FFA522" leftmargin="220" filtername="ideeën hebben te maken met...">
            <multiplechoiceitem columnname="naam_kolom_1" label="Praktische zorgnoden"></multiplechoiceitem>
            <multiplechoiceitem columnname="naam_kolom_1" label="Praktische zorgnoden"></multiplechoiceitem>
        </multiplechoicebarchart>
        */
    }
  }
  