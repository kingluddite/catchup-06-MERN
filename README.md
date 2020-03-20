# Activity 1 Solution

* Check that branch and:
  - Create a new file called `Note.js`
  - Inside this file, create a **Note** model. Each **Note** should hold a String value called "content" which is required
  - You have 10 minutes

## Solution
`models/Node.js`

```
const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
const NoteSchema = new Schema({
  content: {
    type: String,
    required: "You must include some content in your note"
  }
});

// This creates our model from the above schema, using Mongoose's model method
var Note = mongoose.model('Note', NoteSchema);

// Export the Note model
module.exports = Note;
```

## Next - Express Routes
`$ git checkout 08-express-routes`


