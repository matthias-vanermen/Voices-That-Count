class MultiFilter {
    constructor(  
      name1,
      name2,
      columnname1,
      columnname2,
      icon1,
      icon2,
      all1,
      all2
    ) {
      this.name1 = name1;
      this.name2 = name2;
      this.columnname1 = columnname1;
      this.columnname2 = columnname2;
      this.icon1 = icon1;
      this.icon2 = icon2;
      this.all1 = all1;
      this.all2 = all2;
    }
  
    setName1(name1) {
      this.name1 = name1;
    }
    getName1() {
      return this.name1;
    }

    setName2(name2) {
      this.name2 = name2;
    }
    getName2() {
      return this.name2;
    }

    setColumnname1(columnname1) {
      this.columnname1 = columnname1;
    }
    getColumnname1() {
      return this.columnname1;
    }

    setColumnname2(columnname2) {
      this.columnname1 = columnname2;
    }
    getColumnname2() {
      return this.columnname2;
    }
  
    setIcon1(icon1) {
      this.columnname1 = icon1;
    }
    getIcon1() {
      return this.icon1;
    }

    setIcon2(icon2) {
      this.columnname1 = icon2;
    }
    getIcon2() {
      return this.icon2;
    }

    setAll1(all1) {
      this.columnname1 = all1;
    }
    getAll1() {
      return this.all1;
    }

    setAll2(all2) {
      this.columnname1 = all2;
    }
    getAll2() {
      return this.all2;
    }
  
    createChartXML(root) {
       // XML-methode van Wout.
      root.ele("multifilter")
      .att('icon1', this.getIcon1())
      .att('name1', this.getName1())
      .att('colmnname1', this.getColumnname1())
      .att('all1', this.getAll1())
      .att('icon2', this.getIcon2())
      .att('name2', this.getName2())
      .att('columnname2', this.getColumnname2())
      .att('all2', this.getAll2())
      
    }
  }
  
  module.exports = {MultiFilter}
