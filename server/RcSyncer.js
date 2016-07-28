"use strict";

const _ = require("lodash");
const ConfigReader = require("./ConfigReader");
const RcJsonBuilder = require("./RcJsonBuilder");
let fakemode = !!(process.argv.length > 3 && process.argv[3] == 'testMode');

const K8sApiReader = fakemode ? require("./FakeK8sApiReader") : require("./K8sApiReader");

module.exports = class RcSyncer {

  constructor(){
    this.k8sApiReader = new K8sApiReader();
    this.configReader = new ConfigReader(fakemode);
    this.rcDataCache = [];
    this.environments = [];
  }

  run(){
    this.callEvery({timeout: 30000, interval: 20000, self: this, fn: this.syncRcData});
  }
  
  getRcData(){
    return this.rcDataCache;
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

  syncRcData(self) {
    if (self.environments.length === 0) {
      self.environments = self.configReader.getEnvironments();
    }

    self.requestReplicationControllerData({environments: self.environments}).then((json) => {
      self.rcDataCache = json;
    }).catch((err) => console.error(err));
  }


  requestReplicationControllerData({environments: environments}){
    let json = [];

    const chainFillNodes = (previous, environment) => {
      return previous.then((data) => {
        if(data){
          json.push(data);
        }
        return this._fillRcs({environment: environment});
      });
    };

    return environments.reduce(chainFillNodes, new Promise((resolve) => {resolve(undefined)})).then((data)=> {
      if(data){
        json.push(data);
      }
      return json
    });

  }

  _fillRcs({environment: environment}){
    return this.k8sApiReader.readReplicationControllers({environment: environment})
      .then((rcJsonFromApi) => {


        const rcList = _.map(_.filter(rcJsonFromApi.items, (rc) => rc.metadata.namespace === environment.namespace)
          , (item) => RcJsonBuilder.createRCJson({item: item}));

        return {name: environment.name, rcs: rcList};
      })
  }

};
