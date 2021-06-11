const chart = require("../chart");

class ListChart extends chart.Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,

    datafieldtitle,
    datafieldtext,
    listcounter
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    this.datafieldtitle = datafieldtitle;
    this.datafieldtext = datafieldtext;
    this.listcounter = listcounter;

    if (listcounter == "") {
      //default listcounter
      this.listcounter = "false";
    } else this.listcounter = listcounter;
  }

  setDatafieldtitle(datafieldtitle) {
    this.datafieldtitle = datafieldtitle;
  }
  getDatafieldtitle() {
    return this.datafieldtitle;
  }

  setDatafieldtext(datafieldtext) {
    this.datafieldtext = datafieldtext;
  }
  getDatafieldtext() {
    return this.datafieldtext;
  }
  setListcounter(listcounter) {
    this.listcounter = listcounter;
  }
  getListcounter() {
    return this.listcounter;
  }

  createChartXML() {
    // XML-methode van Wout.
    root2 = root.ele("list")
    .att('row', this.row)
    .att('rowspan', this.rowspan)
    .att('column', this.column)
    .att('columnspan', this.rowspan)
    .att('title', this.title)
    .att('datafieldtext', this.getDatafieldtext())
    .att('datafieldtitle', this.getDatafieldtitle())
    .att('listcounter', this.getListcounter());



    /* 
      <list row="1" rowspan="2" column="3" columnspan="2" title="verhalen" datafieldtitle="TitelVerhaal" datafieldtext="Verhaal" listcounter="true"></list>
      <list row="1" column="3" columnspan="2" title="Sugesties" datafieldtext="13IdeeënSuggestiesOndersteuningOuderen"></list>
      */
  }
}

module.exports = { ListChart };
