const Service = require('egg').Service;

class UserService extends Service {
    async get(name) {
        let result = this.ctx.model.User.find();
        return result;
    }
}
module.exports = UserService;