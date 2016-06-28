/* eslint-disable new-cap, max-len */

import express from 'express';
import Venue from '../models/venue';
import Seat from '../models/seat';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Venue.find().populate('seats').exec((err, venues) =>
   res.send({ venues }));
});

router.get('/:id', (req, res) => {
  Venue.findById(req.params.id).populate('seats').exec((err, venue) => res.send({ venue }));
});

router.get('/:id/seats', (req, res) => {
  Venue.findById(req.params.id).populate('seats').exec((err, venue) => {
    res.send({ venue });
  });
});

router.post('/', (req, res) => {
  const c = new Venue(req.body);
  c.save(() => {
    res.send('SAVED!');
  });
});
