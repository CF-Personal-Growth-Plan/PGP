var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
  noteBody: String,
  name: String,
  age: String
});

module.exports = mongoose.model('Note', noteSchema);
