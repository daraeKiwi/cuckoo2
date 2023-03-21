import Crypto from '../../modules/crypto'

export class AccountController {
    static baseUrl = "http://127.0.0.1:3100";

    static async getLoginKey() {
        const now = new Date();
        const ticks = now.getTime();

        let key = null;

        try {
            const res = await fetch(AccountController.baseUrl + '/api/Account/getKey', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });

            key = await res.text();
        }
        catch (e) {
            console.log(e);
        }

        return key;
    }

    static async login(id, pw) {
        const key = await AccountController.getLoginKey();

        if (!key)
            return null;

        try {
            const pwHash = Crypto.hashCode(pw);
            const strEnc = Crypto.encrypt(id + "|" + pwHash, key);

            const res = await fetch(AccountController.baseUrl + '/api/Account/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "value": strEnc,
                    "key": key,
                })
            });

            if (res.ok) {
                const result = await res.json();
                /*
                if (result.success == true) {
                    // 로그인 성공
                    //세션 값 넣기
                    const key = result.key;

                    if (save === true) {
                        window.sessionStorage.removeItem(SessionString.Key.account);
                        window.localStorage.setItem(SessionString.Key.account, JSON.stringify(key));
                    }
                    else if (save === false) {
                        window.localStorage.removeItem(SessionString.Key.account);
                        window.sessionStorage.setItem(SessionString.Key.account, JSON.stringify(key));
                    }  
                }
                */
                return result;
            } else {
                let result = new Object();
                result.success = false;
                result.message = "Account Controller 페이지를 찾을 수 없습니다. 네트워크를 확인해주세요.";

                return result;
            }
        }
        catch (e) {
            console.log(e);
        }

        return null;
    }

    static async doubleCheck(email) {
        if (email === null || email === undefined)
            return null;

        try {
            const res = await fetch(AccountController.baseUrl + '/api/Account/doubleCheck', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                })
            });

            if (res.ok) {
                const result = await res.json();
                
                return result;
            } else {
                let result = new Object();
                result.success = false;
                result.message = "Account Controller 페이지를 찾을 수 없습니다. 네트워크를 확인해주세요.";

                return result;
            }
        }
        catch (e) {
            console.log(e);
        }

        return null;
    }
}