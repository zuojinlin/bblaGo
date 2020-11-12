'use strict';

const Service = require('egg').Service;

class ListService extends Service {
  async getList() {
    return [
      {
        title: '中国战“疫”制胜之道',
        subTitle: '[习近平战“疫”兵法——致人而不致于人 即将重启的武汉]',
      },
      {
        title: '驻美使馆:四类人员不列入搭乘临时航班范围',
        subTitle: '[2周确诊增4倍 中国包机2万里驰援 中俄边境小城告急 关闭口岸]',
      },
    ];
  }
}

module.exports = ListService;
