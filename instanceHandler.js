const mainControllerClass = require("./mainController");
let mainController;

function setMainController(){
    mainController = new mainControllerClass.MainController();
}

function getMainController(){
    return mainController
}

module.exports = { setMainController, getMainController };