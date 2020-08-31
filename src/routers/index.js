const express = require('express');
const router = express.Router();
const Quotes = require('../models/quotes');

router.get('/', async (req, res) => {
  const getQuote = await Quotes.find().select('-_id -__v');
  res.status(200).json(getQuote);
});
router.post('/', async (req, res) => {
  const input = req.body;

  try {
    const newQuote = new Quotes(input);
    await newQuote.save();
    return res.send('successful');
  } catch (e) {
    console.log('something went wrong ', e);
  }
});

module.exports = router;
