'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  router.get('/system', controller.system.index);

  io.of('/').route('chat', io.controller.chat.test);

  io.of('/').route('system-room.join', io.controller.system.join);
  io.of('/').route('system-room.leave', io.controller.system.leave);

};
