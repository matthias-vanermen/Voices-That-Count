
const Configurator = require('./models/configurator')
const Tab = require('./models/tab')
const Section = require('./models/section')

const electron = require('electron');

class MainController{
    constructor(){
        var tablist = [];
        var filterlist = [];
        this.configurator = new Configurator.Configurator(tablist, filterlist, 'Voices That Count');
    }

    setConfigurator(configurator) {
        this.configurator = configurator
    }

    getConfigurator(){
        return this.configurator;
    }
}

module.exports = { MainController };