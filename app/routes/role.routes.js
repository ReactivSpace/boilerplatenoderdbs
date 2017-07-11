/**
 * Created by hassan on 7/7/17.
 */
'use strict';

const AuthMiddleware = require('../middleware/auth.middleware');
const roleController = require('../controllers/role.controller');
const passport = require('../config/passport');


module.exports = function (app, apiVersion) {

    const roleRoute = apiVersion + "/user";
    app.post(roleRoute + '/userRole', roleController.RoleMappings);
};