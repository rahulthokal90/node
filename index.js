const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();
const port = process.env.PORT || config.get("port");
// var WebSocketServer = require('ws').Server;
// var wss = new WebSocketServer({ port:port} );
require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();


const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);


module.exports = server;
