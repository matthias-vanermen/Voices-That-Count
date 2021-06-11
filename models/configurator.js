const builder = require("xmlbuilder");
const fs = require('fs');

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
    const root = builder.create('config', this.getTitle() )
        .ele('filter', { name: 'Datacollectie door', columnname: 'Language' })
        .up()
        .ele(this.getTabs())
      .up();
    
    // convert the XML tree to string
      const xml = root.end({ pretty: true });

    // create the config.xml file
      try { fs.writeFileSync('config.xml', xml, 'utf-8'); }
      catch(e) { alert('Failed to save the file !' + e); }
  }
}

// Use this class: let myConfigurator = new Configurator([], "Title");

module.exports = {Configurator};
