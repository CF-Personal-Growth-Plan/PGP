var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
  noteBody: String,
  name: String,
  course: String,
  rtg1: String,
  rtg2: String,
  rtg3: String,
  note: String
});

module.exports = mongoose.model('Note', noteSchema);
