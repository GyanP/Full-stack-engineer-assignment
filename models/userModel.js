const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = model('user', schema);
