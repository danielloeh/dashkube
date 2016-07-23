"use strict"
const FakeData = require("./resources/FakeData");

module.exports = class FakeK8sApiReader {

  readNodes({environment: environment}) {
    return new Promise((resolve, reject) => {
      resolve(FakeData.getNodesJson());

    });
  }

  readPods({environment: environment, callback: callback}) {
    return new Promise((resolve, reject) => {
      resolve(FakeData.getPodsJson());
    });
  }

};

