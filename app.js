'use strict';

// Get dependencies
const express = require('express'),
    socket = require('socket.io'),
    http = require('http'),
    passport = require('./app/config/passport'),
    app = express();

global.winston = require('./app/config/winston');
//Initialize Express
require('./app/config/express')(app, passport);

//Initializing socket io 
require('./app/config/socket.config')(app);

//Iniitalizing sequlize
var db = require('./app/config/sequelize.config');

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */


const server = http.createServer(app);
const io = socket.listen(server);

require('./app/config/socket.config')(io);


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => winston.info(`API running on localhost:${port}`));


module.exports = app;
