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
    //generate the XML file
    const root = create({ version: '1.0' })
      .ele('config', { title: this.getTitle })
        .ele('filter', { name: 'Datacollectie door', columnname: 'Language' })
        .up()
        .ele(this.getTabs).up()
      .up();
    
    // convert the XML tree to string
      const xml = root.end({ prettyPrint: true });

    // create the config.xml file
      try { fs.writeFileSync('config.xml', xml, 'utf-8'); }
      catch(e) { alert('Failed to save the file !' + e); }
  }
}

// Use this class: let myConfigurator = new Configurator([], "Title");

module.exports = {Configurator};
