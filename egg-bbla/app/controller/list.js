'use strict';

const Controller = require('egg').Controller;


class ListController extends Controller {
  async getList() {
    const { ctx } = this;
    const queryParams = ctx.params;
    ctx.body = queryParams;
  }

  async getServiceList() {
    const { ctx } = this;
    const serviceList = await ctx.service.list.getList();
    ctx.body = serviceList;
  }
}

module.exports = ListController;
