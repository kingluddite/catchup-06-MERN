//Each Note should hold a String value called "content" which is required.
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NoteSchema = new Schema({
  content: {
    type: String,
    required: 'note must be filled out'
  }
});
var Note = mongoose.model('Note', NoteSchema);
module.exports = Note;
