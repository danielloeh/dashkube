"use strict"

const $ = require("jquery");
global.jQuery = require('jquery');
require("bootstrap");
const RestUtils = require("./RestUtils");
const Utils = require("./utils");
const Rcs = require("./rcs");
const Cluster = require("./cluster");

const dashcubeContent = $("#dk-content");

class Dashcube {

  static renderCluster(clusterData) {

    let clusterHtml = Cluster.printCluster(clusterData);
    dashcubeContent.empty();
    dashcubeContent.append(clusterHtml);

    Utils.enableTooltips();

    RestUtils.get("/rcs", Dashcube.renderRcs);
  };

  static renderRcs(rcData) {
    rcData.forEach((env) => {
      const envElement = $(`#env-${env.name}`);
      const rcsHtml = Rcs.printRcs(env.rcs);
      envElement.empty();
      envElement.append(rcsHtml);
    });
  };

  start() {
    RestUtils.get("/cluster", Dashcube.renderCluster);
  }

}

new Dashcube().start();
window.setInterval(() => { new Dashcube().start(); }, 10000);