'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log('运行环境==》app.config.env', app.config.env);
  // console.log(controller, '====controller');
  router.get('/', controller.home.index);
  router.get('/share', controller.share.index);
};
