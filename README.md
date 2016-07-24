# Dashkube

Simple k8s dashboard

## Prerequisites

* node.js
* npm

## Setup

run ``` ./setup.sh ``` (runs ```npm install``` root and /app directories)

## Running


Usage: ```node server.js <config.json> [testMode] ```

Open: ``` http://localhost:5556/index.html ```

### e.g. test mode
run ``` ./testmode.sh ``` OR ```node server.js example-config.json testMode ```

### e.g. live
```node server.js config.json```


## Building the frontend

Go to ``` /app ``` directory and run ```./gulpw ```

