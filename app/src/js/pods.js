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

    const createContainerCountDiv = (containerCount, phase) =>
      `<div class=' col-xs-4 label ${Pods.getPhaseClass(phase)}'> 
                <a data-toggle='tooltip' href='#' title='${containerCount} container. ${Pods.getPhaseDescription(phase)}'> 
                C: ${containerCount}</a>
            </div>`;

    const createRestartCountDiv = (restarts) =>
      `<div class=' col-xs-4 label label-${Utils.getBootstrapSuffix(pod.restarts.state)}'> 
                <a data-toggle='tooltip' href='#' title='Amount of restarts'> R: ${restarts}</a>
            </div>`;

    const createUptimeDiv = (uptime) =>
      `<div class=' col-xs-4 label label-default'>  
                <a data-toggle='tooltip' href='#' title='Pod Uptime'>${uptime}</a>"
           </div>`;

    return `<div class='dk-pod-box panel  ${Pods._isStartingOrStopping(pod.phase)}'>
                <div class='dk-pod-header panel-heading ${Pods.getStateClass(pod.state)}'> 
                  <a data-toggle='tooltip'  href='#' title='${Pods.getStateDescription(pod.state)}' >${pod.name}</a>
                </div>
            <div class='row'>`
      + createContainerCountDiv(pod.container, pod.phase)
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

  static  getPhaseClass(phase) {
    if (phase === "ok") {
      return "dk-state-ok";
    } else if (phase === "pending") {
      return "dk-state-starting";
    } else if (phase === "terminating") {
      return "dk-state-stopping";
    } else if (phase === "error") {
      return "dk-state-error";
    } else {
      return "dk-state-unknown";
    }
  }

  static getStateClass(state){
    if (state === "True") {
      return "dk-state-ok";
    } else if (state === "False") {
      return "dk-state-error";
    } else {
      return "dk-state-unknown";
    }
  }

  static  getPhaseDescription(phase) {
    return `In phase: ${phase}.`;
  }

  static  getStateDescription(state) {
    return `Pod ready condition is: ${state}`;
  }

};