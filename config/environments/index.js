require("dotenv").config();

const PRODUCTION = require('./production');
const DEVELOPMENT = require('./development');
const QA = require('./qa');
const {NODE_ENV} = process.env;


let currentEnv = DEVELOPMENT;
console.log(NODE_ENV);
console.log(DEVELOPMENT);
console.log(PRODUCTION);
if(NODE_ENV === "production"){
    console.log('kkkkk');
    currentEnv = PRODUCTION;
}else if(NODE_ENV === "qa"){
    currentEnv = QA;
}

module.exports = currentEnv;