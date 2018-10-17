// TODO
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connection = require("../database");
const routes = require("./routes.js")
// helmet automatically allows cross origin requests,
// various header related functionality

var server = express();


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
                  // remember dev flag here!
server.use(morgan('dev'));
server.use("/", routes);
var port = 3000;

server.listen(port, function() {
  console.log(`serving on port ${port}!`)
});
