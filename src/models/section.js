/* eslint-disable func-names */

import Seat from '../models/seat';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  name: String,
  price: Number,
  seats: [Seat],
});

module.exports = mongoose.model('Section', sectionSchema);
