export class MenuController {
    static baseUrl = "http://127.0.0.1:3100";

    static async doubleCheck(menu) {
        let result = new Object();
        result.success = true;
       
        if (!menu) {
            result.message = "메뉴 이름을 입력해주세요.";
            result.success = false;
            return result;
        }

        try {
            const res = await fetch(MenuController.baseUrl + '/api/Menu/doubleCheck', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "menu": menu,
                })
            });

            if (res.ok) {
                const result = await res.json();
                
                return result;
            } else {
                result.success = false;
                result.message = "Menu Controller 페이지를 찾을 수 없습니다. 네트워크를 확인해주세요.";

                return result;
            }
        }
        catch (e) {
            console.log(e);
            result.message = e.message;
            result.success = false;
        }

        return null;
    }
}