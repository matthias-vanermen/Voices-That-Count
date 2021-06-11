const mainControllerClass = require("./mainController");
var mainController;

function setMainController(){
    mainController = new mainControllerClass.MainController();
}

function getMainController(){
    return mainController
}

module.exports = { setMainController, getMainController };