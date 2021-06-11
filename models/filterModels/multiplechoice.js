class MultipleChoiceFilter {
    constructor(  
      name,
      itemList
    ) {
      this.name = name;    
      this.type = "multiplechoice";
      this.itemList = itemList;
    }
  
    setName(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
  
    addItem(columnname, label) {
      var tempArray = [];
      tempArray.push(columnname, label);
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
        .att('name', this.getName)
        .att('type', "multiplechoice")
        for (l = 0; l < getItems().length; l++) {
          root2.ele('multiplechoiceitem', {columnname: this.getItems[l][0], label: this.getItems[l][1]}).up();
        }
    }
  }
  
  module.exports = {MultipleChoiceFilter}