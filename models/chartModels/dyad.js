class Dyad extends Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,

    datapointcount,
    selectioncount,
    datafield,
    labelleft,
    labelright
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    this.datafield = datafield;
    this.datapointcount = datapointcount;
    this.selectioncount = selectioncount;
    this.labelleft = labelleft;
    this.labelright = labelright;
  }

  setDatafield(datafield) {
    this.datafield = datafield;
  }

  getDatafield() {
    return this.datafield;
  }

  setDatapointcount(datapointcount) {
    this.datapointcount = datapointcount;
  }

  getDatapointcount() {
    return this.datapointcount;
  }

  setSelectioncount(selectioncount) {
    this.selectioncount = selectioncount;
  }

  getSelectioncount() {
    return this.selectioncount;
  }

  setLabelleft(labelleft) {
    this.labelleft = labelleft;
  }

  getLabelleft() {
    return this.labelleft;
  }

  setLabelright(labelright) {
    this.labelright = labelright;
  }

  getLabelright() {
    return this.labelright;
  }

  createChartXML() {
    // XML-methode van Wout.
    /*  
      <dyad row="1" column="1" columnspan="2" title="Naam van de dyad" icon="home" datapointcount="true" 
        selectioncount="true" color="#499894" datafield="Kolomnaamuit de CSV" labelleft="Label left" labelright="Label right">
      </dyad>
      */
  }
}
