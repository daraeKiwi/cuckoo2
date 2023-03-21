const express = require('express');
//const qs = require('querystring');
const cors = require('cors');
const asyncHandler = require('express-async-handler');

const Crypto = require('../src/modules/crypto');
const Data = require('../src/modules/data');
const DBManager = require('../src/modules/DB/dbManager');
const DataManager = require('./CUCKOO.DAL/dataManager');

const databaseConfig = require('./config/databaseConfig.json');

const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));

app.post('/api/Account/getKey', function(request, response){
    let randomKey = Data.randomString();

    response.send(randomKey);
});


app.post('/api/Account/login', asyncHandler(async(request, response) => {
//app.post('/api/Account/login', function(request, response){
    var body = '';
    
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        //const post = qs.parse(body);
        const post = JSON.parse(body);

        let value = post.value;
        let key = post.key;

        let decryptedData = Crypto.decrypt(value, key);
        let idx = decryptedData.indexOf("|");

        if (idx === -1) {
            let result = new Object();
            result.success = false;
            result.message = "제대로 된 데이터가 아닙니다.";

            response.send(result);
        }

        let email = decryptedData.substring(0, idx);
        let pw = decryptedData.substring(idx + 1);

        const dataManager = new DataManager(
            databaseConfig.config.host, 
            databaseConfig.config.id, 
            databaseConfig.config.password, 
            databaseConfig.config.dbType,
            databaseConfig.config.databaseName);
        const result =  dataManager.getSelectManager().selectUser("Email = '" + email + "' And Password = '" + pw + "'");

        result.then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        
        response.send(decryptedData);
    });
}));
 
app.listen(3100, () => console.log('Example app listening on port 3100!'));
