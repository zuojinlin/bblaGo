'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/login', controller.login.index);
  router.get('/list/:listId', controller.list.getList);
  router.get('/service/list', controller.list.getServiceList);
};
