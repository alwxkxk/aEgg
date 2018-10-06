'use strict';

const Controller = require('egg').Controller;

class SystemController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, SystemController';
  }
}


module.exports = SystemController;
