const CryptoJS = require('crypto-js');
const sha256 = require('crypto-js/sha256');

module.exports = class Crypto {
    static encrypt(str, key) {
        let encrypted = CryptoJS.AES.encrypt(str, key);
        encrypted = encrypted.toString();

        return encrypted;
    }

    static decrypt(str, key) {
        const bytes  = CryptoJS.AES.decrypt(str, key);
        let decrypted = bytes.toString(CryptoJS.enc.Utf8);

        return decrypted;
    }

    static hashCode(str) {
        let code = sha256(str);

        return code;
    }
}