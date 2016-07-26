"use strict"
const FakeData = require("./resources/FakeData");
const https = require("https");

module.exports = class K8sApiReader {

  readNodes({environment: environment}) {
    const options = this.createOptions({path: '/api/v1/nodes', environment: environment});

    return this.sendRequest(options);
  }

  readReplicationControllers({environment: environment}) {
    const options = this.createOptions({path: '/api/v1/replicationcontrollers', environment: environment});

    return this.sendRequest(options);
  }

  readPods({environment: environment}) {
    const options = this.createOptions({path: '/api/v1/pods', environment: environment});

    return this.sendRequest(options);
  }

  createOptions({path: path, environment: environment}) {
    return {
      host: environment.apiUrl,
      path: path,
      method: 'GET',
      rejectUnauthorized: false,
      headers: {
        'Authorization': 'Basic ' + new Buffer(environment.user + ':' + environment.password).toString('base64')
      }
    };
  }

  sendRequest(options) {
    return new Promise((resolve, reject) => {

      const request = https.request(options, (response) => {

        if (response.statusCode < 200 || response.statusCode > 299) {
          reject(new Error('Failed to load page, status code: ' + response.statusCode));
        }

        response.setEncoding('utf8');

        const body = [];
        response.on('data', (chunk) => body.push(chunk));
        response.on('end', () => resolve(JSON.parse(body.join(''))));
      });
      request.on('error', (err) => reject(err))

      request.on('socket', function (socket) {
        socket.setTimeout(2000);
        socket.on('timeout', function () {
          request.abort();
        });
      });

      request.end();
    });
  }
};

