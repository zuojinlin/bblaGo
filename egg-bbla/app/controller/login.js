'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx, app } = this;
    const queryParams = ctx.request.body;
    const result = await app.mysql.select('user', {
      where: {
        user: queryParams.user,
        password: queryParams.password,
      },
    });
    if (result && result.length > 0) {
      ctx.body = {
        code: 1,
        title: '登录成功',
        msg: `欢迎：${queryParams.user}`,
      };
    } else {
      ctx.body = {
        code: 2,
        title: '用户名或密码错误！',
        msg: '用户名或密码错误！',
      };
    }
  }
}

module.exports = LoginController;
