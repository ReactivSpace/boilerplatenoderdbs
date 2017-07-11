/**
 * Created by hassan on 7/7/17.
 */
'use strict';

const db = require('../config/sequelize.config'),
            _ = require('lodash'),
            generalHelpingMethods = require('./general.helper'),
            async = require('async');

 function signUp(input){
    const userObj = {
         userFirstName : input.firstName,
         userLastName : input.lastName,
         userFullName: input.firstName+input.lastName,
         userName : input.firstName + input.lastName,
         alias : input.firstName + input.lastName,
         emailAddress : input.email,
         UserRoleId:input.UserRoleId
     };
     //return generalHelpingMethods.rejectPromise("msg");
     var user = db.User.build(userObj);
     user.provider = 'local';
     user.salt = user.makeSalt();
     user.hashedPassword = user.encryptPassword(input.password, user.salt);
     winston.info('New User (local) : { id: ' + user.id + ' username: ' + user.username + ' }');

     return user.save()
         .then(function () {

             return user;

     }).catch(generalHelpingMethods.catchException);


 }

 function changePassword(input, user){

     if(!user){
         return generalHelpingMethods.rejectPromise("Not Authorize");
     }
     const oldPassword = _.trim(input.oldPassword);

     return db.User.findById(user.id).then((user) => {

         const oldHashPassword = user.encryptPassword(oldPassword, user.salt);

         if(oldHashPassword !== user.hashedPassword){
             return generalHelpingMethods.rejectPromise("Please provide corrent old password.");
         }
         user.salt = user.makeSalt();
         user.hashedPassword = user.encryptPassword(_.trim(input.newPassword), user.salt);

        return user.save({fields: ['salt','hashedPassword']})


     }).catch(generalHelpingMethods.catchException);


 }

 function updateUser(input, user){

     if(!user){
         return generalHelpingMethods.rejectPromise("Not Authorize");
     }

     return db.User.findById(user.id).then((user) => {

         user.firstName = _.trim(input.firstName);
         user.lastName = _.trim(input.lastName);
         user.email = _.trim(input.email);

        return user.save({fields: ['firstName', 'lastName','email']})


     }).catch(generalHelpingMethods.catchException);

 }

 function deleteUser(input){


     return db.User.findById(input.userId).then((user) => {


        return user.destroy();


     }).catch(generalHelpingMethods.catchException);

 }
 function allUsers(){
     return db.User.findAll().then((user) => {
        return user;
     }).catch(generalHelpingMethods.catchException);

 }
 function getById(input){
     return db.User.findById(input).then((user) => {
        return user;
     }).catch(generalHelpingMethods.catchException);

 }
 module.exports = {
     signUp : signUp,
     changePassword : changePassword,
     updateUser : updateUser,
     deleteUser : deleteUser,
     allUsers:allUsers,
     getById:getById
 }


