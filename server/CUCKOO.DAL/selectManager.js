const User = require('../CUCKOO.Model/user');

module.exports = class SelectManager {
    constructor(dataManager) {
        this._dataManager = dataManager;
        this._dbManager = dataManager.getDBManager();
    }

    async selectUser(conditions) {
        let sql = "Select " + User.getFields() + " From " + User.getTableName();

        if (conditions !== null && conditions !== undefined && conditions !== "") {
            sql = sql + " Where " + conditions;
        }

        let result = null;
        let arrUsers = [];
        const response = await this._dbManager.querySQL(sql);
        
        if (response.success) {
            if (response.results === null || response.results === undefined) {
                result = new Object();
                result.success = false;
                result.message = "query 오류: " + sql;

                return result;
            } else if (response.results.length === 0) {
                result = new Object();
                result.success = true;
                result.results = arrUsers;
                result.message = "해당 값이 없습니다.";

                return result;
            }

            for(let i = 0; i < response.results.length; i++) {
                const data = response.results[i];
                const user = new User(data.ID, data.Email, data.Name, data.Password, data.CreateDate, data.UpdateDate, data.DeleteDate, data.IsUse);
                arrUsers.push(user);
            }

            result = new Object();
            result.success = true;
            result.results = arrUsers;

        } else {
            result = response;
        }

        return result;
    }
}