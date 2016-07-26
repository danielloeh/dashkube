"use strict";

const Utils = require("./utils");

module.exports = class Rcs {


  static printRcs(rcs) {
    let rcsHtml = "";

    rcs.forEach((rc) => {
      rcsHtml += Rcs.print(rc)
    });

    return rcsHtml;
  }

  static print(rc) {
    const state = Utils.getBootstrapSuffix(rc.state);
    return `<div class='label label-default dk-rc label-${state}'>${rc.name} (${rc.replicas}/${rc.specReplicas})</div>`;
  }


};

