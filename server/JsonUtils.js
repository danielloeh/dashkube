module.exports = class JsonUtils {


  static checkConditionState({conditions: conditions}) {

    let nodeState = "";

    conditions.forEach((condition) => {

      if (condition.type === "Ready") {
        nodeState = condition.status;
      }
    });
    return nodeState;
  }

};