const DBManager = require('../../src/modules/DB/dbManager');
const SelectManager = require('./selectManager');

module.exports = class DataManager {
    constructor(host, id, pw, dbType, dbName) {
        this._dbManager = new DBManager(host, id, pw, dbType, dbName);

        this._selectManager = new SelectManager(this);
    }

    getDBManager() {
        return this._dbManager;
    }

    getSelectManager() {
        return this._selectManager;
    }
}