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

  createTabXML() {
      //methode voor XML nog afwachten op Wout
  }
}

<<<<<<< HEAD
module.exports = { Tab };

=======
module.exports = {Tab}
>>>>>>> 6a9f3b3286e9673eac5e3694d5ccb022ca1a4089
// Use this class: let myTab = new Tab([], "Title", "#eeeeee", "coffee");
