/*
 * server.js
 *
 * Creates node.js server
 */


// Dependencies
var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 8008),
    server = module.exports = express();


// Server Configuration
server.configure(function () {

    server.use(express["static"](__dirname + "/../public"));

    server.use(express.errorHandler({

        dumpExceptions:true,

        showStack:true

    }));

    server.use(server.router);
});


// Start Node
http.createServer(server).listen(port);

console.log('\n\nHey there.\n\nThe fun starts at http://localhost:' + port + '. Now go forth and rock out!');