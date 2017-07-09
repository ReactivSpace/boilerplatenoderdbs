/**
 * Created by hassan on 7/7/17.
 */
'use strict';

const AuthMiddleware = require('../middleware/auth.middleware');
const userController = require('../controllers/user.controller');
const passport = require('../config/passport');


module.exports = function (app, apiVersion) {

    const userRoute = apiVersion + "/user";
    app.post(userRoute + '/signUp',AuthMiddleware.validateSignUp, userController.signUp);
    app.put(userRoute + '/changePassword',passport.authenticate('jwt', { session: false }),AuthMiddleware.validateChangePassword, userController.changePassword);
    app.put(userRoute + '/update',passport.authenticate('jwt', { session: false }),AuthMiddleware.validateUpdateUser, userController.updateUser);
    app.delete(userRoute + '/delete',passport.authenticate('jwt', { session: false }),AuthMiddleware.validateDeleteUser, userController.deleteUser);

};