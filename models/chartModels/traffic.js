const chart = require("../chart");

class TraffiChart extends chart.Chart {
  constructor(
    row,
    column,
    rowspan,
    columnspan,
    title,
    icon,

    color,
    city,
    street,
    pae,
    modelsplitmotorized,
    roadcategory,
    nodata
  ) {
    super(row, column, rowspan, columnspan, title, icon);
    if (color == "") {
      //default color; override with setColor()-method
      this.color = "#00f";
    } else this.color = color;
    this.city = city;
    this.street = street;
    this.roadcategory = roadcategory;
    this.modelsplitmotorized = modelsplitmotorized;
    this.pae = pae;
    this.nodata = nodata;
  }
  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }

  setCity(city) {
    this.city = city;
  }

  getCity() {
    return this.city;
  }

  setStreet(street) {
    this.street = street;
  }

  getStreet() {
    return this.street;
  }

  setPae(pae) {
    this.pae = pae;
  }

  getPae() {
    return this.pae;
  }

  setRoadcategory(roadcategory) {
    this.roadcategory = roadcategory;
  }

  getRoadcategory() {
    return this.roadcategory;
  }

  setModelsplitmotorized(modelsplitmotorized) {
    this.modelsplitmotorized = modelsplitmotorized;
  }

  getModelsplitmotorized() {
    return this.modelsplitmotorized;
  }

  setNodata(nodata) {
    this.nodata = nodata;
  }

  getNodata() {
    return this.nodata;
  }

  createChartXML(root) {
    root2 = root.ele("traffic")
    .att('row', this.row)
    .att('rowspan', this.rowspan)
    .att('column', this.column)
    .att('columnspan', this.rowspan)
    .att('title', this.title)
    .att('icon', this.icon)
    .att('color', this.getColor())
    .att('city', this.getCity())
    .att('street', this.getStreet())
    .att('pae', this.getPae())
    .att('modelsplitmotorized', this.getModelsplitmotorized())
    .att('roadcategory', this.getRoadcategory())
    .att('nodata', this.getNodata())
    //wordt opgeroepen in elke chart-klasse.
  }
}

module.exports = { TraffiChart };
