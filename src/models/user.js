const mongoose = require('mongoose');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    name: { type: String, required: true, min: 2 },
    email: { type: String, required: true },
    password: { type: String, required: true, min: 5 },
  })
);

module.exports = User;
