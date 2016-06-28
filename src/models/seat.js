/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  type: String,
  price: Number,
  isPurchased: Boolean,
  venue: { type: mongoose.Schema.ObjectId, ref: 'Venue' },
});

module.exports = mongoose.model('Seat', seatSchema);
