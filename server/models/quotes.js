import mongoose from 'mongoose';
import Joi from 'joi';

export const Quotes = mongoose.model(
    'Quotes',
    new mongoose.Schema({
        id: { type: String, required: true },
        quote: { type: String, required: true },
        userId: { type: String, required: true },
    })
);

export function validateQuoteInput(userInput) {
    const schema = Joi.object({
        id: Joi.string().required(),
        quote: Joi.string().required(),
        userId: Joi.string().email().required(),
    });

    return schema.validate(userInput);
}
