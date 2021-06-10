class DistributionChart extends Chart {
    constructor(
      row,
      column,
      rowspan,
      columnspan,
      title,
      icon,
      datafield,
      wordamount = "30", //dit is een string, maar dat maakt niet uit, het systeem maakt hiervan gebruik
      fontsize = "12" //dit ook
    ) {
      super(row, column, rowspan, columnspan, title, icon);
      this.datafield = datafield;
      this.wordamount = wordamount;
      this.fontsize = fontsize;
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
        return this.wordamount
    }

    setFontsize(fontsize) {
        this.fontsize = fontsize;
    }

    getFontsize() {
        return this.fontsize;
    }
  
    createChartXML() {
      // XML-methode van Wout.
      
      /*
      <wordcloud row="1" column="1" columnspan="2" datafield="Verhaal" fontsize="10"></wordcloud>
      */
    }
  }
  