const node1 = "node01.fakeservice.addr";
const node2 = "node02.fakeservice.addr";
const node3 = "node03.fakeservice.addr";
const node4 = "node04.fakeservice.addr";

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
        {
          "metadata": {
            "name": node1,
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
                "status": "True",
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
        },
        {
          "metadata": {
            "name": node2,
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
                "status": "True",
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
        },
        {
          "metadata": {
            "name": node3,
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
                "status": "True",
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
        },
        {
          "metadata": {
            "name": node4,
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
                "status": "True",
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
        }
      ]
    }
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
        {
          "metadata": {
            "name": "some-service",
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
            "annotations": {

            }
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
            "nodeName": node1
          },
          "status": {
            "phase": "Running",
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
                "restartCount": 0,
                "image": "server-docker.fakeservice.io:910/faker",
                "imageID": "docker://1234",
                "containerID": "docker://1234"
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "some-service2",
            "generateName": "some-service2",
            "namespace": "some_namespace",
            "selfLink": "/api/v1/namespaces/app-server/pods/some-service-3qvtb",
            "uid": "24afbcfc-3a0d-11e6-a4bf-bc764e08941b",
            "resourceVersion": "5627612",
            "creationTimestamp": "2016-06-24T13:11:20Z",
            "labels": {
              "deployment": "99",
              "name": "some-service"
            },
            "annotations": {

            }
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
            "nodeName": node1
          },
          "status": {
            "phase": "Running",
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
                "restartCount": 0,
                "image": "server-docker.fakeservice.io:910/faker",
                "imageID": "docker://1234",
                "containerID": "docker://1234"
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "some-service",
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
            "annotations": {

            }
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
            "nodeName": node2
          },
          "status": {
            "phase": "Running",
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
                "restartCount": 0,
                "image": "server-docker.fakeservice.io:910/faker",
                "imageID": "docker://1234",
                "containerID": "docker://1234"
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "some-service",
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
            "annotations": {

            }
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
            "nodeName": node2
          },
          "status": {
            "phase": "Pending",
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
                "restartCount": 0,
                "image": "server-docker.fakeservice.io:910/faker",
                "imageID": "docker://1234",
                "containerID": "docker://1234"
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "some-service",
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
            "annotations": {

            }
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
            "nodeName": node2
          },
          "status": {
            "phase": "Running",
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
                "restartCount": 0,
                "image": "server-docker.fakeservice.io:910/faker",
                "imageID": "docker://1234",
                "containerID": "docker://1234"
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "some-service6",
            "generateName": "some-service2",
            "namespace": "some_namespace",
            "selfLink": "/api/v1/namespaces/app-server/pods/some-service-3qvtb",
            "uid": "24afbcfc-3a0d-11e6-a4bf-bc764e08941b",
            "resourceVersion": "5627612",
            "creationTimestamp": "2016-06-24T13:11:20Z",
            "labels": {
              "deployment": "99",
              "name": "some-service"
            },
            "annotations": {

            }
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
            "nodeName": node1
          },
          "status": {
            "phase": "Running",
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
                "restartCount": 0,
                "image": "server-docker.fakeservice.io:910/faker",
                "imageID": "docker://1234",
                "containerID": "docker://1234"
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "some-service7",
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
            "annotations": {

            }
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
            "nodeName": node2
          },
          "status": {
            "phase": "Running",
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
                "restartCount": 0,
                "image": "server-docker.fakeservice.io:910/faker",
                "imageID": "docker://1234",
                "containerID": "docker://1234"
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "some-service8",
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
            "annotations": {

            }
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
            "nodeName": node2
          },
          "status": {
            "phase": "Pending",
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
                "restartCount": 0,
                "image": "server-docker.fakeservice.io:910/faker",
                "imageID": "docker://1234",
                "containerID": "docker://1234"
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "some-service",
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
            "annotations": {

            }
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
            "nodeName": node3
          },
          "status": {
            "phase": "Running",
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
                "restartCount": 0,
                "image": "server-docker.fakeservice.io:910/faker",
                "imageID": "docker://1234",
                "containerID": "docker://1234"
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "some-service4",
            "generateName": "some-service4",
            "namespace": "some_namespace",
            "selfLink": "/api/v1/namespaces/app-server/pods/some-service-3qvtb",
            "uid": "24afbcfc-3a0d-11e6-a4bf-bc764e08941b",
            "resourceVersion": "5627612",
            "creationTimestamp": "2016-06-24T13:11:20Z",
            "labels": {
              "deployment": "99",
              "name": "some-service"
            },
            "annotations": {

            }
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
            "nodeName": node2
          },
          "status": {
            "phase": "Terminating",
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
                "restartCount": 10,
                "image": "server-docker.fakeservice.io:910/faker",
                "imageID": "docker://1234",
                "containerID": "docker://1234"
              }
            ]
          }
        }

      ]
    }
  };
};