'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async info() {
        const userInfo =await this.ctx.service.user.get();
        this.ctx.body = userInfo;
    }
}

module.exports = UserController;