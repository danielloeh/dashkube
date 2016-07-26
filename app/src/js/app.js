"use strict"

const $ = require("jquery");
global.jQuery = require('jquery');
require("bootstrap");
const RestUtils = require("./RestUtils");

function dashkube() {

  console.log('Get fresh data.');
  var clusterData, rcData;

  function storeClusterData(data) {

    clusterData = data;

    $("#dk-content").empty();

    clusterData.forEach((cluster) => renderCluster(cluster.nodes, cluster.name));
  }


  function storeRcData(data) {

    console.log('data' +data);
    rcData = data;

    rcData.forEach((env) => {renderRCs(env.rcs, env.name)});
  }

  function _getBootstrapSuffix(state) {
    if (state === "ok") {
      return "success";
    } else if (state === "unhealthy") {
      return "warning";
    } else if (state === "error") {
      return "danger";
    } else {
      return "default";
    }
  }

  function renderRCs(rcs, name){

    $("#env-"+name).empty();

    rcs.forEach((rc) => {
      const state = _getBootstrapSuffix(rc.state);

      var rcDivs = `<div class='label label-default dk-rc label-${state}'>${rc.name} (${rc.replicas}/${rc.specReplicas})</div>`;

      $("#env-"+name).append(rcDivs)
    });
  }

  function renderCluster(nodes, name) {

    function _getPhaseClass(state) {
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

    function _getPanelClass(state) {
      if (state === "ok") {
        return "panel-success";
      } else if (state === "unhealthy") {
        return "panel-warning";
      } else if (state === "error") {
        return "panel-danger";
      } else {
        return "panel-info";
      }
    }

    function _isStartingOrStopping(state) {
      if (state === "pending" || state === "terminating") {
        return "pulsating";
      }
      return "";
    }


    var nodeHtml = "";

    function printNode(node) {

      function printPod(pod) {

        var podStateClass = _getPhaseClass(pod.state);
        var suffix = _getBootstrapSuffix(pod.restarts.state);

        var pulsatingClass = _isStartingOrStopping(pod.state);

        var createContainerCountDiv = function (containerCount) {
          return "<div class=' col-xs-4 label label-default'> " +
            "<a data-toggle='tooltip' href='#' title='Amount of containers'> C: " + containerCount + "</a>"
            + "</div>";
        };

        var createRestartCountDiv = function (restarts) {
          return "<div class=' col-xs-4 label label-" + suffix + "'> " +
            "<a data-toggle='tooltip' href='#' title='Amount of restarts'> R: " + restarts + "</a>"
            + "</div>";
        };


        var createUptimeDiv = function (uptime) {
          return "<div class=' col-xs-4 label label-default'> " +
            "<a data-toggle='tooltip' href='#' title='Pod Uptime'> " + uptime + "</a>"
            + "</div>";
        };


        nodeHtml +=
          "<div class='dk-pod-box panel " + pulsatingClass + "'>"
          + "<div class='dk-pod-header panel-heading " + podStateClass + "'>" + pod.name + "</div>"
          + "<div class='row' >"
          + createContainerCountDiv(pod.container)
          + createRestartCountDiv(pod.restarts.count)
          + createUptimeDiv(pod.runningSince)
          + "</div>"
          + "</div>";
      }

      var nodeStateClass = _getPanelClass(node.state);

      nodeHtml += "<div class='col-xs-3'>";
      nodeHtml += "<div class='dk-node-box panel " + nodeStateClass + "'>";
      nodeHtml += "<div class='dk-node-header panel-heading'>" + node.name + "</div>";
      var pods = node.pods;
      pods.forEach(printPod);
      nodeHtml += "</div>";
      nodeHtml += "</div>";

    }


    var _createClusterDivs= function(name){
      return "<div class='label label-default dk-cluster-header'> " + name + "</div>"
        +  "<div id='env-"+name+"'> </div>"
    };

    nodeHtml += "<div class='dk-cluster-box row'>"
    nodeHtml += "<div class='col-xs-1 dk-env-box'>" + _createClusterDivs(name) + "</div>";
    nodeHtml += "<div class='dk-cluster-box row col-xs-11 '>";

    nodes.forEach(printNode);
    nodeHtml += "</div>";
    nodeHtml += "</div>";

    $("#dk-content").append(nodeHtml);

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
  }

  RestUtils.get("/cluster", storeClusterData);
  RestUtils.get("/rcs", storeRcData);

}

dashkube();
window.setInterval(function () {
  dashkube();
}, 10000);