/* eslint-disable new-cap, max-len */

import express from 'express';
import Seat from '../models/seat';
const router = module.exports = express.Router();

router.get('/:id', (req, res) => {
  Seat.findbyId(req.params.id, (err1, seat) => {
    res.send({ seat });
  });
});

router.post('/:id/purchase', (req, res) => {
  Seat.findById(req.params.id, (err1, seat) => {
    seat.isPurchased(true);
    seat.save(() => res.send({ seat }));
  });
});
