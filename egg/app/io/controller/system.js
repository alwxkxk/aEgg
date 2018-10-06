'use strict';


module.exports = app => {
  class Controller extends app.Controller {
    join() {
      const { service, ctx } = this;
      const room = service.system.getRoom();// 调用函数随便初始化了system服务
      ctx.socket.join(room);
    }
    leave() {
      const { service, ctx } = this;
      const room = service.system.getRoom();// 调用函数随便初始化了system服务
      ctx.socket.levae(room);
    }
  }
  return Controller;
};
