/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  isPurchased: { type: Boolean, default: false },
});

module.exports = mongoose.model('Seat', seatSchema);
