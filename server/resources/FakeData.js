const node1 = "node01.fakeservice.addr";
const node2 = "node02.fakeservice.addr";
const node3 = "node03.fakeservice.addr";
const node4 = "node04.fakeservice.addr";
const node5 = "node05.fakeservice.addr";

module.exports = class FakeData {

  static getNodesJson() {
    return {
      "kind": "NodeList",
      "apiVersion": "v1",
      "metadata": {
        "selfLink": "/api/v1/nodes",
        "resourceVersion": "123456"
      },
      "items": [
        FakeData.createNodeJson({name: node1}),
        FakeData.createNodeJson({name: node2}),
        FakeData.createNodeJson({name: node3, readyState: "False"}),
        FakeData.createNodeJson({name: node4, readyState: "Unknown"}),
        FakeData.createNodeJson({name: node5})
      ]
    }
  }

  static createNodeJson({name: name, readyState: readyState = "True"}) {
    return {
      "metadata": {
        "name": name,
        "selfLink": "/api/v1/nodes/fakeservice.addr",
        "uid": "367558f4-3473-11e6-977c-bc764e08941b",
        "resourceVersion": "",
        "creationTimestamp": "",
        "labels": {
          "kubernetes.io/hostname": "fakeservice.addr"
        }
      },
      "spec": {
        "externalID": "fakeservice.addr"
      },
      "status": {
        "capacity": {
          "cpu": "4",
          "memory": "1234",
          "pods": "40"
        },
        "conditions": [
          {
            "type": "Ready",
            "status": readyState,
            "lastHeartbeatTime": "",
            "lastTransitionTime": "",
            "reason": "KubeletReady",
            "message": "kubelet is posting ready status"
          },
          {
            "type": "OutOfDisk",
            "status": "False",
            "lastHeartbeatTime": "",
            "lastTransitionTime": "",
            "reason": "KubeletHasSufficientDisk",
            "message": "kubelet has sufficient disk space available"
          }
        ],
        "addresses": [
          {
            "type": "LegacyHostIP",
            "address": "1.2.3.4"
          },
          {
            "type": "InternalIP",
            "address": "1.2.3.4"
          }
        ]
      }
    };
  }


  static getPodsJson() {
    return {
      "kind": "PodList",
      "apiVersion": "v1",
      "metadata": {
        "selfLink": "/api/v1/pods",
        "resourceVersion": "16554737"
      },
      "items": [
        FakeData.createPodJson({name: 'some_service', phase: 'Running', restarts: 1, node: node1}),
        FakeData.createPodJson({name: 'some_service1', phase: 'Running', restarts: 0, node: node1}),
        FakeData.createPodJson({name: 'some_service2', phase: 'Error', restarts: 0, node: node1}),
        FakeData.createPodJson({name: 'some_service3', phase: 'Pending', restarts: 0, node: node1}),
        FakeData.createPodJson({name: 'some_service4', phase: 'Running', restarts: 0, node: node2}),
        FakeData.createPodJson({name: 'some_service5', phase: 'Running', restarts: 1, node: node2}),
        FakeData.createPodJson({name: 'some_service6', phase: 'Running', restarts: 0, node: node2}),
        FakeData.createPodJson({name: 'some_service7', phase: 'Terminating', restarts: 0, node: node2}),
        FakeData.createPodJson({name: 'some_service8', phase: 'Running', restarts: 9, node: node2}),
        FakeData.createPodJson({name: 'some_service9', phase: 'Running', restarts: 0, node: node4}),
        FakeData.createPodJson({name: 'some_service10', phase: 'Running', restarts: 2, node: node4})
      ]
    }
  };

  static createPodJson({name: name, restarts: restarts, node: node, phase: phase}) {
    return {
      "metadata": {
        "name": name,
        "generateName": "some-service",
        "namespace": "some_namespace",
        "selfLink": "/api/v1/namespaces/app-server/pods/some-service-3qvtb",
        "uid": "24afbcfc-3a0d-11e6-a4bf-bc764e08941b",
        "resourceVersion": "5627612",
        "creationTimestamp": "2016-06-24T13:11:20Z",
        "labels": {
          "deployment": "99",
          "name": "some-service"
        },
        "annotations": {}
      },
      "spec": {
        "volumes": [
          {
            "name": "default-token",
            "secret": {
              "secretName": "default-token"
            }
          }
        ],
        "containers": [
          {
            "name": "someService",
            "image": "server-docker.fakeservice.addr:910/bla",
            "ports": [
              {
                "containerPort": 9999,
                "protocol": "TCP"
              }
            ],
            "resources": {
              "limits": {
                "cpu": "500m",
                "memory": "1024Mi"
              },
              "requests": {
                "cpu": "500m",
                "memory": "1024Mi"
              }
            },
            "volumeMounts": [
              {
                "name": "default1234",
                "readOnly": true,
                "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
              }
            ],
            "terminationMessagePath": "",
            "imagePullPolicy": "IfNotPresent"
          }
        ],
        "restartPolicy": "Always",
        "terminationGracePeriodSeconds": 15,
        "dnsPolicy": "ClusterFirst",
        "serviceAccountName": "default",
        "serviceAccount": "default",
        "nodeName": node
      },
      "status": {
        "phase": phase,
        "conditions": [
          {
            "type": "Ready",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": null
          }
        ],
        "hostIP": "1.2.3.4",
        "podIP": "1.2.3.4",
        "startTime": "2016-06-27T16:49:01Z",
        "containerStatuses": [
          {
            "name": "someService",
            "state": {
              "running": {
                "startedAt": "2016-06-24T13:11:26Z"
              }
            },
            "lastState": {},
            "ready": true,
            "restartCount": restarts,
            "image": "server-docker.fakeservice.io:910/faker",
            "imageID": "docker://1234",
            "containerID": "docker://1234"
          }
        ]
      }
    };
  }
};