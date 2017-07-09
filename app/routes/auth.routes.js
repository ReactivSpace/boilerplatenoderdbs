'use strict';

const AuthMiddleware = require('../middleware/auth.middleware');
const generalMiddleware = require('../middleware/general.middleware');
const AuthController = require('../controllers/auth.controller');
const passport = require('../config/passport');



module.exports = function (app, apiVersion) {

    app.post(apiVersion + '/login' , AuthMiddleware.authenticateLoginParams,  AuthController.login);
    app.get(apiVersion + '/logout' , AuthMiddleware.addLogOutFlag ,  passport.authenticate('jwt', { session: false }),  AuthController.logoutDevice);
    app.get(apiVersion+"/test", function(req, res){
        res.send("server running")
    });

};