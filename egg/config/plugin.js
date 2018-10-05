'use strict';
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.io = {
  enable: true,
  package: 'egg-socket.io',
  namespace: {
    '/': {
      connectionMiddleware: [],
      packetMiddleware: []
    }
  }
};
// had enabled by egg
// exports.static = true;
