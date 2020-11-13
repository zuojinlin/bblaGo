'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async index() {
    const { ctx, app } = this;
    const queryParams = ctx.request.body;
    const userInfo = await app.mysql.select('user', {
      where: {
        user: queryParams.user,
        password: queryParams.password,
      },
    });
    if (userInfo && userInfo.length > 0) {
      ctx.body = {
        code: 2,
        title: '该账户已被注册！',
        msg: `该账户已被注册！：${queryParams.user}`,
      };
    } else {
      const result = await app.mysql.insert('user', { user: queryParams.user, password: queryParams.password });
      console.log(result);
      ctx.body = {
        code: 1,
        title: '注册成功！',
        msg: `欢迎：${queryParams.user}`,
      };
    }
  }
}

module.exports = RegisterController;
