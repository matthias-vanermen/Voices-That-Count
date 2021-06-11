class Section {
  constructor(
    chartList,
    title,
    backgroundcolor,
    textcolor,
    textsize,
    textalign
  ) {
    this.chartList = chartList;
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
    this.chartList.push(chart);
  }

  getCharts() {
    return this.chartList;
  }

  deleteChart(chart) {
    for (var i = 0; i < this.chartList.length; i++) {
      if (this.chartList[i] == chart) {
        this.chartList.splice(i, 1);
        i--;
      }
    }
  }

  createSectionXML(root) {
    //methode voor XML nog afwachten op Wout
    for (k = 0; k < this.getCharts().length; k++) {
      root2 = root.ele(this.getCharts()[k][0])
    }
  }
}

module.exports = {Section}

// Use this class: let mySection = new Section([], "title", "#bbbbbb", "#aaaaaa", "2", "left");
