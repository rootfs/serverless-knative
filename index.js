'use strict';

/*
NOTE: this plugin is used to add all the differnet provider related plugins at once.
This way only one plugin needs to be added to the service in order to get access to the
whole provider implementation.
*/

const KnativeProvider = require('./provider/KnativeProvider');
const KnativeDeploy = require('./deploy/KnativeDeploy');
const KnativeDeployFunction = require('./deployFunction/KnativeDeployFunction');
const KnativeRemove = require('./remove/KnativeRemove');
const KnativeInvoke = require('./invoke/KnativeInvoke');
const KnativeInfo = require('./info/KnativeInfo');
const KnativeLogs = require('./logs/KnativeLogs');

class KnativeIndex {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.serverless.pluginManager.addPlugin(KnativeProvider);
    this.serverless.pluginManager.addPlugin(KnativeDeploy);
    this.serverless.pluginManager.addPlugin(KnativeDeployFunction);
    this.serverless.pluginManager.addPlugin(KnativeRemove);
    this.serverless.pluginManager.addPlugin(KnativeInvoke);
    this.serverless.pluginManager.addPlugin(KnativeInfo);
    this.serverless.pluginManager.addPlugin(KnativeLogs);
  }
}

module.exports = KnativeIndex;