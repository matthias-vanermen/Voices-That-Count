const barchart = require("./models/chartModels/multiplechoice")

var b = new barchart.MultiplechoiceBarchart("1","0","1","1","Test voor simplebarChart","coffee","","false","vertical","20","30","Country",[["Belgium", "Belgie"], ["Germany","Duitsland"]] );

alert(b.getIcon);