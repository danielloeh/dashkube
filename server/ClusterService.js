"use strict"

const _ = require("lodash");
const ConfigReader = require("./ConfigReader");

let fakemode = !!(process.argv.length > 3 && process.argv[3] == 'testMode');
const K8sApiReader = fakemode ? require("./FakeK8sApiReader") : require("./K8sApiReader");

module.exports = class ClusterService {


  constructor() {
    this.k8sApiReader = new K8sApiReader();
    this.clusterDataCache = [];
    this.environments = [];
    this.configReader = new ConfigReader(fakemode);
    this.callEvery({timeout: 30000, interval: 10000, self: this, fn: this.syncClusterData});
  }

  readClusterData() {
    return this.clusterDataCache;
  }

  callEvery({timeout: timeout = 60000, interval: interval = 10000, self: self, fn: fn}) {
    let startTime = (new Date()).getTime();

    (function p() {
      fn(self);
      if (((new Date).getTime() - startTime ) <= timeout) {
        setInterval(p, interval);
      }
    })()
  };

  syncClusterData(self) {
    if (self.environments.length === 0) {
      self.environments = self.configReader.getEnvironments();
    }

    console.log("Syncing Cluster Data from APIs.");
    self.requestClusterData({environments: self.environments}).then((json) => {
      self.clusterDataCache = json;
    }).catch((err) => console.error(err));
  }


  requestClusterData({environments : environments}) {

    let json = [];

    const chainFillNodes = (previous, environment) => {
      return previous.then((data) => {
        json.push(data);
        return this._fillNodes({environment: environment});
      });
    };

    return environments.reduce(chainFillNodes, this._fillNodes({environment: environments[0]})).then(()=> json);
  };


  _fillNodes({environment: environment}) {

    let nodesJsonFromApiScope;

    return this.k8sApiReader.readNodes({environment: environment})
      .then((nodesJsonFromApi) => {
        nodesJsonFromApiScope = nodesJsonFromApi;
        return this.k8sApiReader.readPods({environment: environment})
      })
      .then((podsJsonFromApi) => {
        const nodeSet = {};

        _.each(nodesJsonFromApiScope.items, (item) => {
          nodeSet[item.metadata.name] = []
        });

        _.each(podsJsonFromApi.items, (item) => {

          const nodeName = item.spec.nodeName;

          if (_.has(nodeSet, nodeName) && item.metadata.namespace === environment.namespace) {
            nodeSet[nodeName].push(ClusterService._createPodJson({item: item}));
          }
        });

        const clusterNodes = _.map(nodesJsonFromApiScope.items, (item) => ClusterService._createNodeJson({
          item: item,
          nodeSet: nodeSet
        }));

        return {name: environment.name, nodes: clusterNodes};
      })
  }


  static _createNodeJson({item: nodeItem, nodeSet: nodeSet}) {
    return {
      name: nodeItem.metadata.name,
      state: ClusterService._calculateNodeState({conditions: nodeItem.status.conditions}),
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

  static _createPodJson({item: item}) {

    return {
      name: item.metadata.name,
      container: item.spec.containers.length,
      restarts: ClusterService._createRestartJson(item.status.containerStatuses),
      runningSince: ClusterService._calculateUptimeString(item.status.startTime),
      state: ClusterService._calculateState(item.status.phase)
    };
  }

  static _calculateUptimeString(startTime) {
    const uptimeInMs = new Date() - new Date(startTime);
    const uptimeInMinutes = Math.round(uptimeInMs / 1000 / 60);

    if (uptimeInMinutes > 60) {
      return Math.floor(uptimeInMinutes / 60) + "h" + uptimeInMinutes % 60 + "m";
    } else {
      return uptimeInMinutes + "m";
    }
  }

  static _calculateState(state) {
    if (state === "Running") {
      return "ok";
    } else if (state === "Pending") {
      return "pending";
    } else if (state === "Terminating") {
      return "terminating";
    } else {
      return "error";
    }
  }

  static _createRestartJson(containerStatuses) {

    let count = 0;
    _.each(containerStatuses, (containerStatus) => count = +containerStatus.restartCount)

    let state = "ok";
    if (count > 5) {
      state = "error";
    } else if (count > 0) {
      state = "unhealthy";
    }

    return {
      count: count,
      state: state
    }
  }
}
;

