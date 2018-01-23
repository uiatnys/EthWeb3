'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/eth/getCoinbase',controller.eth.getCoinBase);
  router.get('/eth/getAccounts',controller.eth.getAccounts);
};
