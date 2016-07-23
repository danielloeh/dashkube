"use strict"
const ClusterDataService = require("./ClusterService");


module.exports = class ClusterResource {

  constructor() {
    this.clusterDataService = new ClusterDataService();
  }

  get({request: _, response: response}) {

    console.log("Get cluster data.");
    
   
    const json = this.clusterDataService.readClusterData();

    response.send(json);
  }

};
