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
  
    createChartXML() {
      // XML-methode van Wout.
      
    }
  }
  