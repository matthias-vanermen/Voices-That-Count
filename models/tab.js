class Tab {
  constructor(sectionList, title, color, icon) {
    this.sectionList = sectionList;
    this.title = title;
    this.color = color;
    this.icon = icon;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }
  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }

  setIcon(icon) {
    this.icon = icon;
  }
  getIcon() {
    return this.icon;
  }

  addSection(section) {
    this.sectionList.push(section);
  }

  getSections() {
    return this.sectionList;
  }

  deleteSection(section) {
    for (var i = 0; i < this.sectionList.length; i++) {
      if (this.sectionList[i] == section) {
        this.sectionList.splice(i, 1);
        i--;
      }
    }
  }

  createTabXML(root) {
      //methode voor XML nog afwachten op Wout
      for (j = 0; j < this.getSections().length; j++) {
        root2 = root.ele("section", {title: this.getSections()[j][0], backgroundcolor: "#0e2050", textcolor:"white"});
        createSectionXML(root2)
      }
  }
}

module.exports = { Tab };

// Use this class: let myTab = new Tab([], "Title", "#eeeeee", "coffee");
