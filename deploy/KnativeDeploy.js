'use strict';

const BbPromise = require('bluebird');

class KnativeDeploy {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options || {};
    this.provider = this.serverless.getProvider('Knative');

    this.hooks = {
      'deploy:deploy': () => BbPromise.bind(this)
        .then(this.deployServingService)
        .then(() => this.serverless.cli.log('successfully deployed Knative serving service')),
    };
  }

  deployServingService() {
  }
}

module.exports = KnativeDeploy;
