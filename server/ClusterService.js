"use strict"
const fakemode = true;
const K8sApiReader = fakemode ? require("./FakeK8sApiReader") : require("./K8sApiReader");
const _ = require("lodash");
const ConfigReader = require("./ConfigReader");

module.exports = class ClusterDataService {


  constructor() {
    this.k8sApiReader = new K8sApiReader();
    this.clusterDataCache = [];
    this.environments = [];
    this.configReader = new ConfigReader();
    this.callEvery({timeout: 30000, interval: 10000, self: this, fn: this.sync});
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

  sync(self) {
    if (self.environments.length === 0) {
      self.environments = self.configReader.getEnvironments();
    }

    console.log("Syncing.");
    self.requestClusterData({environments: self.environments}).then((json) => {
      self.clusterDataCache = json;
    }).catch((err) => console.error(err));
  }



  requestClusterData({environments : environments}) {

    let gcedata;
    let devdata;
    let ppdata;

    return this._fillNodes({environment: environments[0]})
      .then((data) => {
        gcedata = data;
        return this._fillNodes({environment: environments[1]})
      }).then((data) => {
        devdata = data;
        return this._fillNodes({environment: environments[2]})
      }).then((data) => {
        ppdata = data;
        return this._fillNodes({environment: environments[3]})
      }).then((data) => {
        return [{name: environments[0].name, nodes: gcedata}, {name: environments[1].name, nodes: devdata}, {
          name: environments[2].name,
          nodes: ppdata
        }, {name: environments[3].name, nodes: data}]
      })
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
            nodeSet[nodeName].push(ClusterDataService._createPodJson({item: item}));
          }
        });

        const clusterNodes = _.map(nodesJsonFromApiScope.items, (item) => ClusterDataService._createNodeJson({
          item: item,
          nodeSet: nodeSet
        }));

        return {nodes: clusterNodes};
      })
  }


  static _createNodeJson({item: item, nodeSet: nodeSet}) {
    return {
      name: item.metadata.name,
      state: "ok",
      pods: nodeSet[item.metadata.name]
    }
  }

  static _createPodJson({item: item}) {

    return {
      name: item.metadata.name,
      container: item.spec.containers.length,
      restarts: ClusterDataService._createRestartJson(item.status.containerStatuses),
      runningSince: ClusterDataService._calculateUptimeString(item.status.startTime),
      state: ClusterDataService._calculateState(item.status.phase)
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

