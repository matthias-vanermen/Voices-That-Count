const chart = require("../chart");

class Triad extends Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,

    datapointcount,
    selectioncount,
    datafieldtop,
    datafieldleft,
    datafieldright,
    labeltop,
    labelleft,
    labelright,
    grid
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    this.datafieldtop = datafieldtop;
    this.datafieldleft = datafieldleft;
    this.datafieldright = datafieldright;
    this.datapointcount = datapointcount;
    this.selectioncount = selectioncount;
    this.labeltop = labeltop;
    this.labelleft = labelleft;
    this.labelright = labelright;
    this.grid = grid;
  }

  setDatafieldtop(datafieldtop) {
    this.datafieldtop = datafieldtop;
  }

  getDatafieldtop() {
    return this.datafieldtop;
  }

  setDatafieldleft(datafieldleft) {
    this.datafieldleft = datafieldleft;
  }

  getDatafieldleft() {
    return this.datafieldleft;
  }

  setDatafieldright(datafieldright) {
    this.datafieldright = datafieldright;
  }

  getDatafieldright() {
    return this.datafieldright;
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

  setLabeltop(labeltop) {
    this.labeltop = labeltop;
  }

  getLabeltop() {
    return this.labeltop;
  }

  setGrid(grid) {
    this.grid = grid;
  }

  getGrid() {
    return this.grid;
  }

  createChartXML(root) {
    // XML-methode van Wout.
    root2 = root.ele("triad")
    .att('row', this.row)
    .att('rowspan', this.rowspan)
    .att('column', this.column)
    .att('columnspan', this.rowspan)
    .att('icon', this.icon)
    .att('title', this.title)
    .att('datafieldright', this.getDatafieldright())
    .att('datafieldleft', this.getDatafieldleft())
    .att('datafieldtop', this.getDatafieldtop())
    .att('datapointcount', this.getDatapointcount())
    .att('selectioncount', this.getSelectioncount())
    .att('labelright', this.getLabelright())
    .att('labelleft', this.getLabelleft())
    .att('labeltop', this.getLabeltop())
    //geen data voor
    .att('color', "#499894");



    /*  
      <triad row="2" column="1" columnspan="2" title="Naam van de triad" icon="home" datapointcount="true" selectioncount="true" 
      color="#499894" datafieldtop="Naam CSV-kolom 1ste veld" datafieldleft="Naam CSV-kolom 2de veld" datafieldright="Naam CSV-kolom 3de veld" labeltop="Label top" 
      labelleft="Label left" labelright="Label right" grid="true"></triad>
      */
  }
}

module.exports = { Triad };
