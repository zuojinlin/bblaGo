'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    const queryParams = ctx.request.body;
    if (queryParams.user === 'lamjl' && queryParams.password === '123456') {
      ctx.body = {
        code: 1,
        title: '登录成功',
        msg: `欢迎：${queryParams.user}`,
      };
    } else {
      ctx.body = {
        code: 2,
        title: '登录失败',
        msg: '用户名或密码错误',
      };
    }

  }
}

module.exports = LoginController;
