const chart = require("../chart");

class WordcloudChart extends chart.Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,

    datafield,
    wordamount, //dit is een string, maar dat maakt niet uit, het systeem maakt hiervan gebruik
    fontsize // ^ dit ook
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    this.datafield = datafield;
    this.wordamount = wordamount;
    if (wordamount == "") {
      this.wordamount = "30";
    } else this.wordamount = wordamount;
    if ((fontsize = "")) {
      this.fontsize = "12";
    } else this.fontsize = fontsize;
  }

  setDatafield(datafield) {
    this.datafield = datafield;
  }
  getDatafield() {
    return this.datafield;
  }

  setWordamount(wordamount) {
    this.wordamount = wordamount;
  }
  getWordamount() {
    return this.wordamount;
  }

  setFontsize(fontsize) {
    this.fontsize = fontsize;
  }

  getFontsize() {
    return this.fontsize;
  }

  createChartXML(root) {
    // XML-methode van Wout.
    root2 = root.ele("distributionchart")
      .att('row', this.row)
      .att('rowspan', this.rowspan)
      .att('column', this.column)
      .att('columnspan', this.rowspan)
      .att('title', this.title)
      .att('datafield', this.getDatafield())
      .att('fontsize', this.getFontsize());
    /*
      <wordcloud row="1" column="1" columnspan="2" datafield="Verhaal" fontsize="10"></wordcloud>
      */
  }
}
module.exports = { WordcloudChart };
