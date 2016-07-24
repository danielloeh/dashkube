"use strict"
const nconf = require('nconf');
const fs = require('fs');

module.exports = class ConfigReader {

  constructor(fakemode) {

    nconf.file({file: process.argv[2]});

    nconf.defaults({});
  }

  getEnvironments(){
    return nconf.get('environments');
  }


};