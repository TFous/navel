'use strict';

module.exports = appInfo => {
  const config = exports = {
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1526562673313_9081';

  // add your config here
  config.middleware = [];
    config.mongoose  = {
            url: 'mongodb://127.0.0.1:27017/user',
            options: {},
    }
  return config;
};
