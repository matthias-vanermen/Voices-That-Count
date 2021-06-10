class Section {
  constructor(
    char_List,
    title,
    backgroundcolor,
    textcolor,
    textsize,
    textalign
  ) {
    this.char_List = char_List;
    this.title = title;
    this.backgroundcolor = backgroundcolor;
    this.textcolor = textcolor;
    this.textsize = textsize;
    this.textalign = textalign;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }
  setBackgroundcolor(backgroundcolor) {
    this.backgroundcolor = backgroundcolor;
  }
  getBackgroundcolor() {
    return this.backgroundcolor;
  }

  setTextcolor(textcolor) {
    this.textcolor = textcolor;
  }
  getTextcolor() {
    return this.textcolor;
  }

  setTextsize(textsize) {
    this.textsize = textsize;
  }
  getTextsize() {
    return this.textsize;
  }

  setTextalign(textalign) {
    this.textalign = textalign;
  }
  getTextalign() {
    return this.textalign;
  }

  addChart(chart) {
    this.char_List.push(chart);
  }

  getCharts() {
    return this.char_List;
  }

  deleteChart(chart) {
    for (var i = 0; i < this.char_List.length; i++) {
      if (this.char_List[i] == chart) {
        this.char_List.splice(i, 1);
        i--;
      }
    }
  }

  createSectionXML() {
    //methode voor XML nog afwachten op Wout
  }
}

// Use this class: let mySection = new Section([], "title", "#bbbbbb", "#aaaaaa", "2", "left");
