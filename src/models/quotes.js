const mongoose = require('mongoose');

const Quotes = mongoose.model(
  'Quotes',
  new mongoose.Schema({
    quote: { type: String, required: true },
    userId: { type: String, required: true },
  })
);

module.exports = Quotes;
