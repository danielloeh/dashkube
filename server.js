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
    app.use(express.static(rootDir + '/app/'));
  }

  static configureEndpoints(app) {
    console.log(`Configure health endpoints`);
    app.get("/health", (req, res) => res.send("OK"));

    const clusterResource = new ClusterResource();
    app.get("/cluster", (req, res) => clusterResource.get({request: req, response: res}));
  }
}

new DashkubeServer();
