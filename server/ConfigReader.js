"use strict"
const nconf = require('nconf');
const fs = require('fs');

module.exports = class ConfigReader {

  constructor() {

    nconf.argv().env();

    nconf.file({file: 'config.json'});

    nconf.defaults({});
  }

  getEnvironments(){
    return nconf.get('environments');
  }


};