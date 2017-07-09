/**
 * Created by hassan on 7/7/17.
 */
'use strict';

/**
 * User Model
 */

let crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

    let User = sequelize.define('User',
        {
            firstName: {
                type : DataTypes.STRING
            },
            lastName: {
                type : DataTypes.STRING
            },
            userName: {
                type : DataTypes.STRING
            },
            email: {
                type : DataTypes.STRING,
                isEmail: true,
                allowNull: false
            },
            alias: {
                type : DataTypes.STRING, allowNull: false, unique : true,
            },
            hashedPassword: {
                type : DataTypes.STRING
            },
            salt: {
                type : DataTypes.STRING,
            },
            phoneNumber: {
                type : DataTypes.STRING
            },
            countryCode: {
                type : DataTypes.STRING
            },
            imageUrl: {
                type : DataTypes.STRING
            },
            provider: DataTypes.STRING,
        },
        {
            instanceMethods: {
                toJSON: function () {
                    var values = this.get();
                    delete values.hashedPassword;
                    delete values.salt;
                    return values;
                },
                makeSalt: function() {
                    return crypto.randomBytes(16).toString('base64');
                },
                authenticate: function(plainText){
                    return this.encryptPassword(plainText, this.salt).toString() == this.hashedPassword.toString();
                },
                encryptPassword: function(password, salt) {
                    if (!password || !salt) {
                        return '';
                    }
                    salt = new Buffer(salt, 'base64');
                    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
                }
            }
        },{
            associate: function(models) {
                User.hasMany(models.UserTokenInfo);
                User.belongsTo(models.UserRole);
            }
        }
    );

    return User;
};