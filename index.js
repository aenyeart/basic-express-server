'use strict'; 

const server = require('./lib/server.js');
const port = process.env.PORT || 3000;
server.start(port);