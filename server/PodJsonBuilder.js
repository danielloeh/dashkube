"use strict";
const _ = require("lodash");

module.exports = class PodJsonBuilder {


  static createPodJson({item: item}) {

    return {
      name: item.metadata.name,
      container: item.spec.containers.length,
      restarts: PodJsonBuilder._createRestartJson(item.status.containerStatuses),
      runningSince: PodJsonBuilder._calculateUptimeString(item.status.startTime),
      state: PodJsonBuilder._calculateState(item.status.phase)
    };
  }

  static _calculateUptimeString(startTime) {
    const uptimeInMs = new Date() - new Date(startTime);
    const uptimeInMinutes = Math.round(uptimeInMs / 1000 / 60);

    if (uptimeInMinutes > 60) {
      return Math.floor(uptimeInMinutes / 60) + "h" + uptimeInMinutes % 60 + "m";
    } else {
      return uptimeInMinutes + "m";
    }
  }

  static _calculateState(state) {
    if (state === "Running") {
      return "ok";
    } else if (state === "Pending") {
      return "pending";
    } else if (state === "Terminating") {
      return "terminating";
    } else {
      return "error";
    }
  }

  static _createRestartJson(containerStatuses) {

    let count = 0;
    _.each(containerStatuses, (containerStatus) => count = +containerStatus.restartCount)

    let state = "ok";
    if (count > 5) {
      state = "error";
    } else if (count > 0) {
      state = "unhealthy";
    }

    return {
      count: count,
      state: state
    }
  }

};