/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  name: String,
  list_of_seats: [{ type: mongoose.Schema.ObjectId, ref: 'Seat' }],
});

module.exports = mongoose.model('Venue', venueSchema);
