# Mongo
* My model will be Person
* You will build a Notes model in your next activity

## models directory
* This is where we create models for our Database

### What is a model?
* A model is a JavaScript object representation of a database object
  - We are essentially telling our app what properties each object that goes into or comes out of the Database will have

### We need to "model" this real world scenario in our Mongo Database
* Suppose we've been contracted by the city to create an application for tracking and recording live births

#### How would we model this data?
* **note** You would never openly store a SS# like this (that would a security no-no, but for the sake of this discussion let's just go with it)

### The Person
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

## Activity 1

* Check that branch and:
  - Create a new file called `Note.js`
  - Inside this file, create a **Note** model. Each **Note** should hold a String value called "content" which is required
  - You have 10 minutes

## Solution
`$ git checkout 07-activity-01-solution` 


