/* eslint-disable new-cap, max-len */

import express from 'express';
import Seat from '../models/seat';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Seat.find((err1, seats) => {
    res.send({ seats });
  });
});

router.get('/:id', (req, res) => {
  Seat.findbyId(req.params.id, (err1, seat) => {
    res.send({ seat });
  });
});

router.post('/', (req, res) => {
  console.log('seats!!!', req.body);
  res.send({ok: 1});
  const numSeats = req.params.number;
  const section = req.params.section;
  const price = req.params.price;
  const seats = [];

  for (let i = 0; i < numSeats; i++) {
    const s = new Seat(section, price);
    seats.push(s);
  }
  Seat.create(seats, function(err) {
    if (err) {
      console.log(err);
    }
  });
});


router.post('/:id/purchase', (req, res) => {
  Seat.findById(req.params.id, (err1, seat) => {
    seat.isPurchased(true);
    seat.save(() => res.send({ seat }));
  });
});
