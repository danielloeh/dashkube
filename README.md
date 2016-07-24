# Dashkube

Simple k8s dashboard

## Prerequisites

* node.js
* npm

## Setup

Run ``` npm install ``` in both root (for the server) and /app directory (for the client) for installing dependencies.

## Running

```node server.js <config.json> [testMode] ```

Open ``` http://localhost:5556/index.html ```

### e.g. test mode
```node server.js example-config.json testMode ```

### e.g. live
```node server.js config.json```


## Building the frontend

Go to ``` /app ``` directory and run ```./gulpw ```

