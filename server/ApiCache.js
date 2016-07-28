"use strict";

module.exports = class ApiCache {

  constructor(){
    this.nodeDataCache = [];
    this.rcDataCache = [];
  }

  callEvery({timeout: timeout = 60000, interval: interval = 10000, self: self, fn: fn}) {
    let startTime = (new Date()).getTime();

    (function p() {
      fn(self);
      if (((new Date).getTime() - startTime ) <= timeout) {
        setInterval(p, interval);
      }
    })()
  };

};