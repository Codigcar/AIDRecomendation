const BaseBusiness = require('./base.business');
const { User } = require('./models')

class UserBusiness extends BaseBusiness{

    constructor({userRepository}){
        super(userRepository,User)
    }
    
}

module.exports = UserBusiness;