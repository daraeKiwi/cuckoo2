module.exports = class User {
    constructor(id, email, name, password, createDate, updateDate, deleteDate, isUse) {
        this._id = id;
        this._email = email;
        this._name = name;
        this._password = password;
        this._createDate = createDate;
        this._updateDate = updateDate;
        this._deleteDate = deleteDate;
        this._isUse = isUse;
    }

    static Fields = {
        ID: 0,
        Email: 1,
        Name: 2,
        Password: 3,
        CreateDate: 4,
        UpdateDate: 5,
        DeleteDate: 6,
        IsUse: 7
    }

    static getFields() {
        let fields = "";

        for(const key in User.Fields) {
            if (fields === "") {
                fields = key;
            } else {
                fields = fields + ", " + key;
            }
        }

        return fields;
    }

    static getTableName() {
        return "User";
    }

    get ID() {
        return this._id;
    } 
    set ID(value) {
        this._id = value;
    }

    get Email() {
        return this._email;
    } 
    set Email(value) {
        this._email = value;
    }

    get Name() {
        return this._name;
    } 
    set Name(value) {
        this._name = value;
    }

    get Password() {
        return this._password;
    } 
    set Password(value) {
        this._password = value;
    }

    get CreateDate() {
        return this._createDate;
    } 
    set CreateDate(value) {
        this._createDate = value;
    }

    get UpdateDate() {
        return this._updateDate;
    } 
    set UpdateDate(value) {
        this._updateDate = value;
    }

    get DeleteDate() {
        return this._deleteDate;
    } 
    set DeleteDate(value) {
        this._deleteDate = value;
    }

    get IsUse() {
        return this._isUse;
    } 
    set IsUse(value) {
        this._isUse = value;
    }

    
}