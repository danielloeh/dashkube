"use strict";

module.exports = class NodeJsonBuilder {


  static createNodeJson({item: nodeItem, nodeSet: nodeSet}) {
    return {
      name: nodeItem.metadata.name,
      state: NodeJsonBuilder._calculateNodeState({conditions: nodeItem.status.conditions}),
      pods: nodeSet[nodeItem.metadata.name]
    }
  }

  static _calculateNodeState({conditions: conditions}) {

    let nodeState = "unhealthy";

    conditions.forEach((condition) => {

      if (condition.type === "Ready") {
        if (condition.status === "True") {
          nodeState = "ok";
        } else if (condition.status === "False") {
          nodeState = "error";
        }
      }
    });
    return nodeState;
  }


};