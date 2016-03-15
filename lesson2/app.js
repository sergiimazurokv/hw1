'use strict';

const http = require('http');
const handler = require('./handler');

const server = http.createServer(handler);

server.listen(3000, () => console.log('Server running at http://127.0.0.1:3000/'));