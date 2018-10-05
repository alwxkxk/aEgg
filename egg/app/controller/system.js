'use strict';

const Controller = require('egg').Controller;

class SystemController extends Controller {
  async index() {
    const { ctx, service } = this;
    const systemInfo = await service.system.systemInfo();
    ctx.body = 'hi, SystemController'+systemInfo.a;
  }
}


module.exports = SystemController;
