var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var ContactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  usaState: String,
  zip: String,
  topic: String,
  message: String
});

module.exports = mongoose.model('Contact', ContactSchema);
