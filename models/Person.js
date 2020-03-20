const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new PersonSchema object
const PersonSchema = new Schema({
  name: {
    type: String,
    required: "You must include a name for each person"
  },
  Social: Number,
  birthDay: { type: Date, default: Date.now }
});

// This creates our model from the above schema, using Mongoose's model method
var Person = mongoose.model('Person', PersonSchema);

// Export the Person model
module.exports = Person;
