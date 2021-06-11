
const Configurator = require('./models/configurator')
/*
import tab from './models/tab'
import section from './models/section'
import chart from './models/chart'
*/
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