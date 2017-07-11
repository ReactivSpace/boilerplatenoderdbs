/**
 * Created by hassan on 7/7/17.
 */
'use strict';

const userRoleHelper = require('../helper/role.helper'),
    StandardError = require('standard-error'),
    generalController = require('./general.controller');

const RoleMappings = function RoleMappings(req, res) {
    return userRoleHelper.RoleMappings(req.body)
        .then(function (data) {
            generalController.successResponse(res, "UserRole created successfully.", data, "role.controller.mapping");
        }).catch(StandardError, function (err) {
            generalController.errorResponse(res, err, null, "role.controller.signup",500);
        }).catch(function (err) {
            generalController.errorResponse(res, err, "Please check originalError for details", "role.controller.mapping",500);
        });
}
 module.exports = {
     RoleMappings : RoleMappings
 }