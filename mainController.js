
const Configurator = require('./models/configurator')
/*
import tab from './models/tab'
import section from './models/section'
import chart from './models/chart'
*/
const electron = require('electron');

var configurator;

function makeConfigurator() {
    var tablist = [];
    configurator = new Configurator.Configurator(tablist, 'Voices That Count');
    return configurator;
}

function test(){
    return 'test'
}

module.exports = { makeConfigurator };