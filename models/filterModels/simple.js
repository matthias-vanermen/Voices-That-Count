class SimpleFilter {
    constructor(  
      name,
      columnname,
      itemList
    ) {
      this.name = name;
      this.columnname = columnname;
      this.itemList = itemList;
    }
  
    setName(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
      
    setColumnname(columnname) {
      this.columnname = columnname;
    }
    getColumnname() {
      return this.columnname;
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
  
    createChartXML(root) {
      // XML-methode van Wout.
      root2 = root.ele('filter')
        .att('name', this.getName())
        .att('columnname', this.getColumnname)
        for (l = 0; l < getItems().length; l++) {
          root2.ele('item', {value: this.getItems[l][0], label: this.getItems[l][1]}).up();
        }

      
    }
  }
  
  module.exports = {SimpleFilter}