'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller ,io} = app;
  router.get('/', controller.home.index);
  router.get('/system', controller.system.index);

  app.io.route('chat', app.io.controller.chat.test);

};
