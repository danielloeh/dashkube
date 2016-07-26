"use strict"
const $ = require("jquery");

module.exports = class Utils {
  
  static getBootstrapSuffix(state) {
    if (state === "ok") {
      return "success";
    } else if (state === "unhealthy") {
      return "warning";
    } else if (state === "error") {
      return "danger";
    } else {
      return "default";
    }
  };

  static enableTooltips() {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip()
    });
  };

};