"use strict";

const Utils = require("./utils");
const Nodes = require("./nodes");

module.exports = class Cluster {


  static printCluster(clusterList) {
    let clusterHtml = "";
    
    clusterList.forEach((cluster) => {
      clusterHtml += Cluster.print(cluster.nodes, cluster.name)
    });

    return clusterHtml;
  }

  static print(nodes, clusterName) {
    const _createClusterDivs = (clusterName) => {
      return "<div class='label label-default dk-cluster-header'> " + clusterName + "</div>"
        + "<div id='env-" + clusterName + "'> </div>"
    };

    let nodeHtml = "";
    nodeHtml += "<div class='dk-cluster-box row'>"
    nodeHtml += "<div class='col-xs-1 dk-env-box'>" + _createClusterDivs(clusterName) + "</div>";
    nodeHtml += "<div class='dk-cluster-box row col-xs-11 '>";

    nodeHtml += Nodes.printNodes(nodes);

    nodeHtml += "</div>";
    nodeHtml += "</div>";

    return nodeHtml;


  }


};

