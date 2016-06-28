/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  section: String,
  price: Number,
  isPurchased: { type: Boolean, default: false },
  venue: { type: mongoose.Schema.ObjectId, ref: 'Venue' },
});

module.exports = mongoose.model('Seat', seatSchema);
