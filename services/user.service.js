const BaseService = require('./base.service');

/*Extends works like inheritance */
class UserService extends BaseService{

    constructor({userBusiness}){
        super(userBusiness)
    }

    /*You can add other methods that there aren´t in the crud */
    
}

module.exports = UserService;