"use strict";

const Utils = require("./utils");

module.exports = class Pods {


  static printPods(pods) {
    let podHtml = "";

    pods.forEach((pod) => {
      podHtml += Pods.print(pod)
    });

    return podHtml;
  }

  static print(pod) {

    const createContainerCountDiv = (containerCount) =>
      `<div class=' col-xs-4 label label-default'> 
                <a data-toggle='tooltip' href='#' title='Amount of containers'> C: ${containerCount}</a>
            </div>`;

    const createRestartCountDiv = (restarts) =>
      `<div class=' col-xs-4 label label-${Utils.getBootstrapSuffix(pod.restarts.state)}'> 
                <a data-toggle='tooltip' href='#' title='Amount of restarts'> R: ${restarts}</a>
            </div>`;

    const createUptimeDiv = (uptime) =>
      `<div class=' col-xs-4 label label-default'>  
                <a data-toggle='tooltip' href='#' title='Pod Uptime'>${uptime}</a>"
           </div>`;

    return `<div class='dk-pod-box panel  ${Pods._isStartingOrStopping(pod.state)}'>
                <div class='dk-pod-header panel-heading ${Pods._getPhaseClass(pod.state)}'> ${pod.name }</div>
            <div class='row'>`
      + createContainerCountDiv(pod.container)
      + createRestartCountDiv(pod.restarts.count)
      + createUptimeDiv(pod.runningSince)
      + `</div>
            </div>`;
  }


  static  _isStartingOrStopping(state) {
    if (state === "pending" || state === "terminating") {
      return "pulsating";
    }
    return "";
  }

  static  _getPhaseClass(state) {
    if (state === "ok") {
      return "dk-state-ok";
    } else if (state === "pending") {
      return "dk-state-stopping";
    } else if (state === "terminating") {
      return "dk-state-starting";
    } else if (state === "error") {
      return "dk-state-error";
    } else {
      return "dk-state-unknown";
    }
  }

};