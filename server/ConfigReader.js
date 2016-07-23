"use strict"
const nconf = require('nconf');
const fs = require('fs');

module.exports = class ConfigReader {

  constructor(fakemode) {

    if(fakemode){
      console.log("Running with example-config.json");
      nconf.file({file: 'example-config.json'});
    }else{
      nconf.file({file: 'config.json'});
    }



    nconf.defaults({});
  }

  getEnvironments(){
    return nconf.get('environments');
  }


};