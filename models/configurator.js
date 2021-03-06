const builder = require("xmlbuilder");
const fs = require('fs');
const tabClass = require('./tab');

class Configurator {
  constructor(tabList, filterList,  title) {
    this.tabList = tabList;
    this.filterList = filterList;
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

  addFilter(filter) {
    this.filterList.push(filter);
  }

  getFilters() {
    return this.filterList;
  }

  deleteFilter(filter) {
    for (var i = 0; i < this.filterList.length; i++) {
      if (this.filterList[i] == filter) {
        this.filterList.splice(i, 1);
        i--;
      }
    }
  }

  createXML() {
    //generate the XML file
    const root1 = builder.create('config')
    .ele('title').att('title', this.getTitle());
    for (var i = 0; i < this.getTabs().length; i++) {
      var root2 = root1.ele("tab").att("title", this.getTabs()[i]).up();
      //tabClass.createTabXML(root2);
    }
    
    // convert the XML tree to string
      const xml = root1.end({allowEmpty: true, pretty: true });

    // create the config.xml file
      try { fs.writeFileSync('config.xml', xml, 'utf-8'); }
      catch(e) { alert('Failed to save the file !' + e); }
  }
}

// Use this class: let myConfigurator = new Configurator([], "Title");

module.exports = {Configurator};
