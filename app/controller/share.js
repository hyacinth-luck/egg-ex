'use strict';
const Controller = require('egg').Controller;


class ShareController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, share';
    await ctx.render('index.njk');
  }
}

module.exports = ShareController;
