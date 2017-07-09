'use strict';

// Get dependencies
const express = require('express'),
    path = require('path'),
    fs = require('fs'),
    config = require('./config'),
    expressValidator = require('express-validator'),
    cors = require('cors'),
    bodyParser = require('body-parser');

module.exports = function(app , passport){

    winston.info(process.NODE_ENV);
    // Parsers for POST data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(expressValidator());

    //enabling cors
    app.use(cors());

    //Initializing passport 
    app.use(passport.initialize());

    // Point static path to dist
    app.use(express.static(path.join(__dirname, '../../dist')));
    app.use(express.static(path.join(__dirname, '../../node_modules')));

    const apiVersion = "/api/v1"
    // Globbing routing files
    config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
      require(path.resolve(routePath))(app, apiVersion);
    });
   
}
