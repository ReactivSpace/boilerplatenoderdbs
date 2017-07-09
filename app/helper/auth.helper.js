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
        userData = {},
        UserRoles=[];
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
           console.log('Ali');
            return db.UserRoleMapping.find({where: {UserId: user.id}}, {raw: true});
        }).then((roles) => {
            UserRoles = roles;
          
            console.log('umar');
            console.log(UserRoles.name);
            userData.userInfo.UserRoleId=UserRoles.name;
            return helpingHelper.signLoginData({data: userData.userInfo, userType: UserRoles.RoleId});
        }).then((tokenData) => {
            userData.tokenInfo = tokenData;
            return userData;
        }).catch(generalHelpingMethods.catchException);

}


module.exports.login = login;