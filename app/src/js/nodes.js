"use strict";

const Pods = require("./pods");

module.exports = class Nodes {


  static printNodes(nodes) {
    let nodesHtml = "";

    nodes.forEach((node) => {
      nodesHtml += Nodes.print(node)
    });

    return nodesHtml;
  }

  static print(node) {

    let nodeHtml = "";
    nodeHtml += `<div class='col-xs-3'>`;
    nodeHtml += `<div class='dk-node-box panel ${Nodes._getPanelClass(node.state)}'>`;
    nodeHtml += `<div class='dk-node-header panel-heading'><a href='http://${node.name}:4194' target='_blank'>${node.name}</a></div>`;
    nodeHtml += Pods.printPods(node.pods);
    nodeHtml += "</div>";
    nodeHtml += "</div>";

    return nodeHtml;
  }

  static  _getPanelClass(state) {
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

};

