const mongoose = require('mongoose');
const Joi = require('joi');
const { string } = require('joi');

const Quotes = mongoose.model(
  'Quotes',
  new mongoose.Schema({
    id: { type: String, required: true },
    quote: { type: String, required: true },
    userId: { type: String, required: true },
  })
);

function validateQuoteInput(userInput) {
  const schema = Joi.object({
    id: Joi.string().required(),
    quote: Joi.string().required(),
    userId: Joi.string().email().required(),
  });

  return schema.validate(userInput);
}

module.exports = { Quotes, validateQuoteInput };
