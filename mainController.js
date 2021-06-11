
const Configurator = require('./models/configurator')
const Tab = require('./models/tab')
const Section = require('./models/section')

const electron = require('electron');

class MainController{
    constructor(tablist, filterlist, title, configurator){
        this.tablist = tablist;
        this.filterlist = filterlist;
        this.title = title;
        this.configurator = configurator;
    }

    addTab(tab){
        this.tablist.unshift(tab);
    }

    getTab(){
        return this.tablist;
    }

    addFilter(filter){
        this.filterlist.push(filter);
    }

    getFilter(){
        return this.filterlist;
    }

    setConfigurator(configurator) {
        this.configurator = configurator
    }

    getConfigurator(){
        return this.configurator;
    }
}

module.exports = { MainController };