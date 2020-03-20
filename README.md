# Mongo
* Create a new file called Person.js
  - The capital letter is a common naming conventions for models

`[APP_ROOT]/models/Person.js`

```
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
```

* My model will be Person
* You will build a Notes model in your next activity
