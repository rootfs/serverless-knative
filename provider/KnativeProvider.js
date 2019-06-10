'use strict';

const providerName = 'Knative';

class KnativeProvider {
  static getProviderName() {
    return providerName;
  }

  constructor(serverless) {
    this.serverless = serverless;
    this.provider = this;
    this.serverless.setProvider(providerName, this);
  }

}

module.exports = KnativeProvider;