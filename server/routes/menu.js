const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');

const Data = require('../../src/modules/data');
const ProcessManager = require('../CUCKOO.BLL/processManager');


const processManager = new ProcessManager();

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

module.exports = router;