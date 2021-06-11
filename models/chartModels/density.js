const chart = require("../chart");

class Triad extends chart.Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,

    datapointcount,
    selectioncount,
    datafieldx,
    datafieldy,
    labelx,
    labely,
    colorscale //examples: lOrRd, YlGnBu, RdBu, Portland, Picnic,Jet, Hot, Greys, Greens, Electric, Earth, Bluered, Blackbody
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    this.datafieldx = datafieldx;
    this.datafieldy = datafieldy;
    this.datapointcount = datapointcount;
    this.selectioncount = selectioncount;
    this.labelx = labelx;
    this.labely = labely;
    this.colorscale = colorscale;
  }

  setDatafieldx(datafieldx) {
    this.datafieldx = datafieldx;
  }

  getDatafieldx() {
    return this.datafieldx;
  }

  setDatafieldy(datafieldy) {
    this.datafieldy = datafieldy;
  }

  getDatafieldy() {
    return this.datafieldy;
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

  setLabelx(labelx) {
    this.labelx = labelx;
  }

  getLabelx() {
    return this.labelx;
  }

  setLabely(labely) {
    this.labely = labely;
  }

  getLabely() {
    return this.labely;
  }

  setColorscale(colorscale) {
    this.colorscale = colorscale;
  }

  getColorscale() {
    return this.colorscale;
  }

  createChartXML(root) {
    // XML-methode van Wout.
    root2 = root.ele("density")
    .att('row', this.row)
    .att('rowspan', this.rowspan)
    .att('column', this.column)
    .att('columnspan', this.rowspan)
    .att('icon', this.icon)
    .att('title', this.title)
    .att('labelx', this.getLabelx())
    .att('labely', this.getLabely())
    .att('datafieldx', this.getDatafieldx())
    .att('datafieldy', this.getDatafieldy())
    .att('datapointcount', this.getDatapointcount())
    .att('selectioncount', this.getSelectioncount())
    //geen data voor
    .att('color', "#499894");

    /*  
      <density row="3" column="3" columnspan="2" title="Density plot demo" icon="home" datafieldx="L3GeluidLawaai-X" labelx="Geluid &amp; Lawaai" datafieldy="L3Luchtkwaliteit-X" 
      labely="Luchtkwaliteit" color="#499894" colorscale="YlGnBu" datapointcount="true" selectioncount="true"></density>
      */
  }
}

module.exports = { Triad };
