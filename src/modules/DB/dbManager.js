const mysql = require("mysql2");

module.exports = class DBManager {
    constructor(host, id, pw, dbType, dbName) { 
        this.host = host;
        this.id = id;
        this.pw = pw;
        this.dbType = dbType; 
        this.dbName = dbName;
        this.connection = null;

        if (dbType === DBManager.DBType.MySQL) {
            
            const pool = mysql.createPool({
                host: this.host, 
                user: this.id, 
                password: this.pw, 
                database: this.dbName
            });

            this.connection = pool.promise();
            
           /*
            this.connection = mysql.createConnection({
                host: this.host, 
                user: this.id, 
                password: this.pw, 
                database: this.dbName
            });
            */
        } else {
            this.connection = null;
        }
    }

    static DBType = {
        MySQL: 0,
        MsSQL: 1,
        Oracle: 2,
    }

    async querySQL(sql) {
        if (this.host === null || this.host === undefined ||
            this.id === null || this.id === undefined ||
            this.pw === null || this.pw === undefined ||
            this.dbType === null || this.dbType === undefined ||
            this.dbName === null || this.dbName === undefined ||
            this.connection === null || this.connection === undefined) {
                let result = new Object();
                result.success = false;
                result.message = "DB 정보가 제대로 되지 않았습니다.";

                return result;
        }
        
        if (this.dbType === DBManager.DBType.MySQL) {
            const [rows, fields] = await this.connection.query(sql);
            //const [rows, fields] = await this.connection.execute(sql);

            let result = new Object();
            result.success = true;
            result.results = rows;

            return result;
        } else {
            let result = new Object();
            result.success = false;
            result.message = "아직 MySQL 외에 지원하지 않습니다.";

            return result;
        }  
    }
    
}