"use strict"

function dashkube() {


  console.log('Get fresh data.');
  var clusterData;

  function storeClusterData(data) {

    clusterData = data;

   $("#dk-content").empty();

    clusterData.forEach(function (cluster) {
      renderCluster(cluster.nodes, cluster.name)
    });

  }

  function renderCluster(data, name) {


    function _getStateClass(state) {
      if (state === "ok") {
        return "dk-state-ok";
      } else if (state === "unhealthy") {
        return "dk-state-unhealthy";
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

    var nodes = data.nodes;

    var nodeHtml = "";

    function printNode(node) {

      function printPod(pod) {

        var podStateClass = _getStateClass(pod.state);
        var suffix = _getBootstrapSuffix(pod.restarts.state);

        nodeHtml +=
          "<div class='dk-pod-box panel'>"
          + "<div class='dk-pod-header panel-heading " + podStateClass + "'>" + pod.name + "</div>"
          + "<div class='row' >"
            + "<div class='col-xs-4 label label-default'>C: " + pod.container + "</div>"
            + "<div class='col-xs-4 label label-" + suffix + "'> "
                + "R: " + pod.restarts.count + "</div>"
            + "<div class='col-xs-4 label label-default '>" + pod.runningSince + "</div>"
          + "</div>"
          + "</div>";
      }

      var panelStateClass = _getPanelClass(node.state);

      nodeHtml += "<div class='col-xs-3'>";
      nodeHtml += "<div class='dk-node-box panel " + panelStateClass + "'>";
      nodeHtml += "<div class='dk-node-header panel-heading'>" + node.name + "</div>";
      var pods = node.pods;
      pods.forEach(printPod);
      nodeHtml += "</div>";
      nodeHtml += "</div>";

    }

    nodeHtml += "<div class='dk-cluster-box row '>"
    nodeHtml += "<div class='dk-cluster-header  col-xs-1 '>" + name + "</div>";
    nodeHtml += "<div class='dk-cluster-box row col-xs-11 '>";

    nodes.forEach(printNode);
    nodeHtml += "</div>";
    nodeHtml += "</div>";

    $("#dk-content").append(nodeHtml);
  }

  RestUtils.get("/cluster", storeClusterData);


}

dashkube();

window.setInterval(function () {
  dashkube();
}, 10000);