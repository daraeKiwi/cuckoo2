const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');

const Data = require('../../src/modules/data');
const Crypto = require('../../src/modules/crypto');
const ProcessManager = require('../CUCKOO.BLL/processManager');

//module.exports = function() {
    //const router = app.Router();
const processManager = new ProcessManager();

router.post("/getKey", (req, res) => {
    let randomKey = Data.randomString();

    res.send(randomKey);
});

router.post('/login', asyncHandler(async(req, res) => {
    var body = '';
    
    req.on('data', function(data){
        body = body + data;
    });
    req.on('end', function(){
        const post = JSON.parse(body);

        let value = post.value;
        let key = post.key;

        let decryptedData = Crypto.decrypt(value, key);
        let idx = decryptedData.indexOf("|");

        if (idx === -1) {
            let result = new Object();
            result.success = false;
            result.message = "제대로 된 데이터가 아닙니다.";

            res.send(result);
        }

        let email = decryptedData.substring(0, idx);
        let pw = decryptedData.substring(idx + 1);

        const result = processManager.getAccountManager().Login(email, pw);

        result.then((res2) => {
            // 결과값 처리
            res.send(res2);
        }).catch((err) => {
            // 에러 처리
            let result2 = new Object();
            result2.success = false;
            result2.message = err;

            res.send(result2);
        });
    });
}));

router.post('/doubleCheck', asyncHandler(async(req, res) => {
    var body = '';
    
    req.on('data', function(data){
        body = body + data;
    });
    req.on('end', function(){
        const post = JSON.parse(body);

        const email = post.email;

        const result = processManager.getAccountManager().DoubleCheck(email);

        result.then((res2) => {
            // 결과값 처리
            res.send(res2);
        }).catch((err) => {
            // 에러 처리
            let result2 = new Object();
            result2.success = false;
            result2.message = err;

            res.send(result2);
        });
    });
}));

    //return router;
//}

module.exports = router;