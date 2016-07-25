"use strict"
const ClusterDataService = require("./ClusterService");


module.exports = class ClusterResource {

  constructor() {
    this.clusterService = new ClusterDataService();
  }

  getNodes({request: _, response: response}) {
    const json = this.clusterService.readNodes();
    response.send(json);
  }

  getRcs({request: _, response: response}) {
    const json = this.clusterService.readReplicationController();
    response.send(json);
  }

};
