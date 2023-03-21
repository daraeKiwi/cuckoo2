const DBManager = require('../../src/modules/DB/dbManager');
const DataManager = require('../CUCKOO.DAL/dataManager');
const AccountManager = require('./accountManager');

const databaseConfig = require('../config/databaseConfig.json');

module.exports = class ProcessManager {
    constructor() {
        //const dataManager = new DataManager('127.0.0.1', 'root', '9449966Ab', DBManager.DBType.MySQL, 'cuckoo');
        const dataManager = new DataManager(
            databaseConfig.config.host, 
            databaseConfig.config.id, 
            databaseConfig.config.password, 
            DBManager.DBType.MySQL, 
            databaseConfig.config.databaseName);
        this._accountManager = new AccountManager(dataManager);
    }

    getAccountManager() {
        return this._accountManager;
    }
}