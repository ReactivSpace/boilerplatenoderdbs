'use strict';

const authHelper = require('../helper/auth.helper'),
    StandardError = require('standard-error'),
    generalController = require('./general.controller');


const login = function (req, res) {

    authHelper.login(req)
        .then((data) => {
            generalController.successResponse(res, "User logedin successfully.", data, "userAuth.controller.login");
        }).catch(StandardError, function (err) {
            generalController.errorResponse(res, err, null, "userAuth.controller.login", 500);
        }).catch(function (err) {
            generalController.errorResponse(res, err, "Please check originalError for details", "userAuth.controller.login", 500);
        });
}


const logoutDevice = function (req, res) {

    generalController.successResponse(res, "User logedout successfully.", null, "userAuth.controller.logoutDevice");
}


module.exports.login = login;
module.exports.logoutDevice = logoutDevice;