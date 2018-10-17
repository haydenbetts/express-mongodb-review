// establish a connection to mongo, and export that connection
// mongo defaults to port 27017
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/todolist");

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error"));

connection.once("open", () => console.log("connected to mongodb"));

module.exports = connection;
