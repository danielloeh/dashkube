"use strict"

const http = require("http");
const express = require("express");
const fs = require("fs");
const path = require("path");
const ClusterResource = require('./server/ClusterResource');
const ClusterService = require('./server/ClusterService');

const PORT = 5556;

class DashkubeServer {

  constructor() {
    const app = express();

    DashkubeServer.configureEndpoints(app);
    DashkubeServer.serveApp(app);

    console.log(`Running DashkubeServer on port ${PORT}`);
    const server = http.createServer(app);
    server.listen(PORT);
  }

  static serveApp(app) {
    const rootDir = path.resolve(path.dirname(module.uri || "."));
    app.use(express.static(rootDir + '/app/dist'));
  }

  static configureEndpoints(app) {
    console.log(`Configure health endpoints`);
    app.get("/health", (req, res) => res.send("OK"));

    const clusterResource = new ClusterResource();
    app.get("/cluster", (req, res) => clusterResource.get({request: req, response: res}));
  }
}

if(process.argv.length <= 2){
  console.log("No config file provided!");
  console.log("Usage: node server.js <configfile> [testMode]");
  console.log("e.g.: node server.js example-config.json");
  process.exit();
}else if(!process.argv[2].endsWith(".json")){
  console.log("Third parameter has to be config file, ending with .json");
  console.log("Usage: node server.js <configfile> [testMode]");
  console.log("e.g.: node server.js example-config.json");
  process.exit();
}

new DashkubeServer();
