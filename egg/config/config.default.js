'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538704417747_7606';

  // add your config here
  config.middleware = [];

  config.io = {
    namespace: {
      '/': {
        connectionMiddleware: [ ],
        packetMiddleware: [ ], // 针对消息的处理暂时不实现
      },
    },
  };

  return config;
};

