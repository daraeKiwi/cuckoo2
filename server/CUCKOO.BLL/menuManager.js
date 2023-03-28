module.exports = class AccountManager {
    constructor(dataManager) {
        this._dataManager = dataManager;
    }

    async DoubleCheck(menu) {
        let result = new Object();
        const response =  await this._dataManager.getSelectManager().selectUser("Email = '" + email + "'");
        
        if (response.success === true) {
            const users = response.results;

            if (users.length === 0) {
                result.success = true;
                result.message = "사용 가능한 이메일 주소입니다.";
            } else {
                result.success = false;
                result.message = "이미 사용 중인 이메일 주소입니다.";
            }
            
        } else {
            result.success = false;
            result.message = response.message;
        }

        return result;
    }
}