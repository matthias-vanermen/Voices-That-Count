class Configurator {
  constructor(tabList, title) {
    this.tabList = tabList;
    this.title = title;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  addTab(tab) {
    this.tabList.push(tab);
  }

  getTabs() {
    return this.tabList;
  }

  deleteTab(tab) {
    for (var i = 0; i < this.tabList.length; i++) {
      if (this.tabList[i] == tab) {
        this.tabList.splice(i, 1);
        i--;
      }
    }
  }

  createXML() {
    //methode voor XML nog afwachten op Wout
  }
}

// Use this class: let myConfigurator = new Configurator([], "Title");
