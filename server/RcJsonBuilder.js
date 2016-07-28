"use strict";

module.exports = class RcJsonBuilder {


  static createRCJson({item: rcItem}){
    return {
      name: rcItem.metadata.name,
      replicas: rcItem.status.replicas,
      specReplicas: rcItem.spec.replicas,
      state: (rcItem.spec.replicas == rcItem.status.replicas) ? 'ok' : 'unhealthy'
    }
  }

};