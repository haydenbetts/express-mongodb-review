// ODM - Mongo uses JSON objects to store data
// ODM - Object document mapping
// versues the ORM - object relational mapping - that we used w/ SQL
const connection = require('./');
const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
  name: { type: String, require: true}
})

const Todo = mongoose.model("Todo", toDoSchema);

module.exports = { Todo };