const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    name: { type: String, required: true, min: 2 },
    email: { type: String, required: true },
    password: { type: String, required: true, min: 5 },
  })
);

function validateUserInput(userInput) {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  });

  return schema.validate(userInput);
}

module.exports = { User, validateUserInput };
