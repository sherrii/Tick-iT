const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
});

// You must export your model through module.exports
// The collection name should be 'student'
module.exports = mongoose.model('User', userSchema);