'use strict';

const passport = require('passport'),
    config = require('./environment.config'),
    passportJWT = require('passport-jwt');


//handeling passport stretegy
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let newConfig = {
    jwtOptions: {
        "secretOrKey": config.jwtOptions.secretOrKey || process.env.secretOrKey,
        "ignoreExpiration": config.jwtOptions.ignoreExpiration || process.env.ignoreExpiration,
        "passReqToCallback": config.jwtOptions.passReqToCallback || process.env.passReqToCallback
    }
}

newConfig.jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();

var strategy = new JwtStrategy(newConfig.jwtOptions, (req, jwt_payload, next) => {

    next(null, jwt_payload);

});

passport.use(strategy);


module.exports = passport;

