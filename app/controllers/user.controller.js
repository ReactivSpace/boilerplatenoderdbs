/**
 * Created by hassan on 7/7/17.
 */
'use strict';

const userHelper = require('../helper/user.helper'),
    StandardError = require('standard-error'),
    generalController = require('./general.controller');

const signUp = function signUp(req, res) {
    return userHelper.signUp(req.body)
        .then(function (data) {
            debugger;
            generalController.successResponse(res, "User signup successfully.", data, "userAuth.controller.signup");
        }).catch(StandardError, function (err) {
            generalController.errorResponse(res, err, null, "userAuth.controller.signup",500);
        }).catch(function (err) {
            generalController.errorResponse(res, err, "Please check originalError for details", "userAuth.controller.signup",500);
        });
}

const changePassword = function changePassword(req, res) {


    return userHelper.changePassword(req.body, req.user)
        .then(function (data) {
            generalController.successResponse(res, "Password changed successfully.", data, "userAuth.controller.changePassword");
        }).catch(StandardError, function (err) {
            generalController.errorResponse(res, err, null, "userAuth.controller.changePassword",500);
        }).catch(function (err) {
            generalController.errorResponse(res, err, "Please check originalError for details", "userAuth.controller.changePassword",500);
        });
};

const updateUser = function updateUser(req, res) {

    return userHelper.updateUser(req.body, req.user)
        .then(function (data) {
            generalController.successResponse(res, "User updated successfully.", data, "userAuth.controller.changePassword");
        }).catch(StandardError, function (err) {
            generalController.errorResponse(res, err, null, "userAuth.controller.changePassword",500);
        }).catch(function (err) {
            generalController.errorResponse(res, err, "Please check originalError for details", "userAuth.controller.changePassword",500);
        });
};

const deleteUser = function deleteUser(req, res) {

    return userHelper.deleteUser(req.body)
        .then(function (data) {
            generalController.successResponse(res, "User deleted successfully.", data, "userAuth.controller.deleteUser");
        }).catch(StandardError, function (err) {
            generalController.errorResponse(res, err, null, "userAuth.controller.deleteUser",500);
        }).catch(function (err) {
            generalController.errorResponse(res, err, "Please check originalError for details", "userAuth.controller.deleteUser",500);
        });
};
const getById = function getById(req, res) {
      console.log(req.params.id);
    return userHelper.getById(req.params.id)
        .then(function (data) {
            generalController.successResponse(res, "User Detail successfully.", data, "userAuth.controller.getUserById");
        }).catch(StandardError, function (err) {
            generalController.errorResponse(res, err, null, "userAuth.controller.getUserById",500);
        }).catch(function (err) {
            generalController.errorResponse(res, err, "Please check originalError for details", "userAuth.controller.deleteUser",500);
        });
};
const allUsers=function allUsers(req,res){
  return userHelper.allUsers()
        .then(function (data) {
            generalController.successResponse(res, "get all User successfully.", data, "userAuth.controller.deleteUser");
        }).catch(StandardError, function (err) {
            generalController.errorResponse(res, err, null, "userAuth.controller.deleteUser",500);
        }).catch(function (err) {
            generalController.errorResponse(res, err, "Please check originalError for details", "userAuth.controller.deleteUser",500);
        });
}
const updateUserbyId=function updateUserbyId(req,res){
        return userHelper.updateUserbyId(req.body, req.user)
        .then(function (data) {
            generalController.successResponse(res, "User updated successfully.", data, "User Update successfully.");
        }).catch(StandardError, function (err) {
            generalController.errorResponse(res, err, null, "userAuth.controller.changePassword",500);
        }).catch(function (err) {
            generalController.errorResponse(res, err, "Please check originalError for details", "userAuth.controller.changePassword",500);
        });
}
module.exports = {
    signUp: signUp,
    changePassword : changePassword,
    updateUser : updateUser,
    deleteUser : deleteUser,
    allUsers:allUsers,
    getById:getById,
    updateUserbyId:updateUserbyId
}