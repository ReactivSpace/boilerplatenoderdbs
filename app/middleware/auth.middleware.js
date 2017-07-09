'use strict';


const generalMiddleware = require('./general.middleware'),
    _ = require("lodash"),
    util = require('util');



const authenticateLoginParams = (req , res , done) => {

    req.checkBody('password', 'Invalid password').notEmpty();
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();

    req.getValidationResult().then((result) => {
        if(!result.isEmpty()){
        return generalMiddleware.standardErrorResponse(res, 'msg',"user.middleware.signup", 400);
    }
        return done();
    });

}

const addLogOutFlag = (req , res , done) => {
    req.logOut = true;
    return done();
}

const validateSignUp = (req , res , done) => {

    req.checkBody('firstName', 'First name not provided.').notEmpty();
    req.checkBody('lastName', 'Last name not provided.').notEmpty();
    req.checkBody('email', 'Email not provided.').notEmpty();
    req.checkBody('password', 'Password not provided.').notEmpty();
    req.checkBody('confirmPassword', 'Confirm password not provided.').notEmpty();
    req.checkBody('email', 'Please provide valid email.').isEmail();

    if(req.body.password !== req.body.confirmPassword){
        return generalMiddleware.standardErrorResponse(res, 'Password and confirm password does not match',"user.middleware.signup", 400);

    }
    if(req.body.password .length < 8 || req.body.password.length >16){
        return generalMiddleware.standardErrorResponse(res, 'Password must be greater than 8 and less than 16',"user.middleware.signup", 400);

    }

    req.getValidationResult().then((result) => {
        if(!result.isEmpty()){
            return generalMiddleware.standardErrorResponse(res, 'There have been validation errors: ' + util.inspect(result.array()),"user.middleware.signup", 400);
        }
        return done();
    });

}

const validateUpdateUser = (req , res , done) => {

    req.checkBody('firstName', 'First name not provided.').notEmpty();
    req.checkBody('lastName', 'Last name not provided.').notEmpty();
    req.checkBody('email', 'Email not provided.').notEmpty();
    req.checkBody('email', 'Please provide valid email.').isEmail();

    req.getValidationResult().then((result) => {
        if(!result.isEmpty()){
            return generalMiddleware.standardErrorResponse(res, 'There have been validation errors: ' + util.inspect(result.array()),"user.middleware.signup", 400);
        }
        return done();
    });


}

const validateChangePassword = (req , res , done) => {


    req.checkBody('oldPassword', 'Old password not provided.').notEmpty();
    req.checkBody('newPassword', 'Password not provided.').notEmpty();
    req.checkBody('confirmPassword', 'Confirm password not provided.').notEmpty();

    if(req.body.newPassword !== req.body.confirmPassword){
        return generalMiddleware.standardErrorResponse(res, 'Password and confirm password does not match',"user.middleware.signup", 400);

    }
    if(req.body.newPassword .length < 8 || req.body.newPassword.length >16){
        return generalMiddleware.standardErrorResponse(res, 'Password must be greater than 8 and less than 16',"user.middleware.signup", 400);

    }


    req.getValidationResult().then((result) => {
        if(!result.isEmpty()){
            return generalMiddleware.standardErrorResponse(res, 'There have been validation errors: ' + util.inspect(result.array()),"user.middleware.signup", 400);
        }
        return done();
    });


}
const validateDeleteUser = (req , res , done) => {


    req.checkBody('userId', 'User not provided.').notEmpty();


    req.getValidationResult().then((result) => {
        if(!result.isEmpty()){
            return generalMiddleware.standardErrorResponse(res, 'There have been validation errors: ' + util.inspect(result.array()),"user.middleware.signup", 400);
        }
        return done();
    });


}

module.exports = {
    authenticateLoginParams : authenticateLoginParams,
    addLogOutFlag : addLogOutFlag,
    validateSignUp : validateSignUp,
    validateChangePassword : validateChangePassword,
    validateUpdateUser : validateUpdateUser,
    validateDeleteUser : validateDeleteUser
};

