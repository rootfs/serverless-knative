'use strict';

const BbPromise = require('bluebird');

class KnativeInfo {
    constructor(serverless, options) {
      this.serverless = serverless;
      this.options = options || {};
      this.provider = this.serverless.getProvider('Knative');
      this.commands = {
        info: {
          usage: 'Show Knative Serving Service',
          lifecycleEvents: [
            'info',
          ],
          options: {
            verbose: {
              usage: 'Show Knative Serving Service yaml',
              shortcut: 'v',
            },
          },
        },
      };
      this.hooks = {
        'info:info': () => BbPromise.bind(this)
          .then(this.info),
      };
    }
  
    info(options) {
    }
  }
  
  module.exports = KnativeInfo;