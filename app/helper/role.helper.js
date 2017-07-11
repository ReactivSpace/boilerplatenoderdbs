/**
 * Created by hassan on 7/7/17.
 */
'use strict';

const db = require('../config/sequelize.config'),
            _ = require('lodash'),
            generalHelpingMethods = require('./general.helper'),
            async = require('async');
function RoleMappings(input){
    const roleObj={
        UserId:input.UserId,
        RoleId:input.RoleId,
        name:input.name
    }
 var role = db.UserRoleMapping.build(roleObj);
 winston.info('New User (local) : { id: ' + role.id + ' username: ' + role.name + ' }');

     return role.save()
         .then(function () {

             return role;

     }).catch(generalHelpingMethods.catchException);

}
 module.exports = {
     RoleMappings : RoleMappings
 }
