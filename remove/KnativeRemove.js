'use strict';

const BbPromise = require('bluebird');
class KnativeRemove {
    constructor(serverless, options) {
      this.serverless = serverless;
      this.options = options || {};
      this.provider = this.serverless.getProvider('Knative');
  
      this.hooks = {
        'remove:remove': () => BbPromise.bind(this)
          .then(this.removeServingService)
          .then(() => this.serverless.cli.log('successfully removed Knative serving service')),
      };
    }
  
    removeServingService() {
    }
  }
  
  module.exports = KnativeRemove;