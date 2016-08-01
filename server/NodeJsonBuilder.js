"use strict";
const JsonUtils = require("./JsonUtils");

module.exports = class NodeJsonBuilder {


  static createNodeJson({item: nodeItem, nodeSet: nodeSet}) {
    return {
      name: nodeItem.metadata.name,
      state: JsonUtils.checkConditionState({conditions: nodeItem.status.conditions}),
      pods: nodeSet[nodeItem.metadata.name]
    }
  }
  
};