'use strict';

const db = require('../config/sequelize.config');
const _ = require('lodash');
const async = require('async');
const generalHelpingMethods = require('./general.helper');
const helpingHelper = require('./helping.helper');


const login = (req) => {

console.log(req.body);
    let email = req.body.email,
        password = req.body.password,
        userData = {};

    return db.User.find({where: {emailAddress: email}}, {raw: true})
        .then((user) => {
            if (!user) {
                return generalHelpingMethods.rejectPromise('Invalid email or password');
            } else if (!user.authenticate(password)) {
                return generalHelpingMethods.rejectPromise('Invalid email or password');
            } else {
                return user;
            }
        }).then((user) => {
            userData.userInfo = user;

            return helpingHelper.signLoginData({data: userData.userInfo, userType: userData.userInfo.UserRoleId});
        }).then((tokenData) => {
            userData.tokenInfo = tokenData;
            return userData;
        }).catch(generalHelpingMethods.catchException);

}


module.exports.login = login;