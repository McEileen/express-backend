/* eslint-disable new-cap, max-len */

import express from 'express';
import Section from '../models/section';
import Seat from '../models/seat';

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Seat.find((err, seats) => {
    res.send({ seats });
    return seats;
  });
});

router.get('/:id', (req, res) => {
  Seat.findbyId(req.params.id, (err1, seat) => {
    res.send({ seat });
  });
});

router.post('/', (req, res) => {
  console.log('seats!!!', req.body);
  // res.send({ok: 1});
  const numSeats = req.params.number;
  const name = req.params.section;
  const price = req.params.price;
  const seats = [];

  for (let i = 0; i < numSeats; i++) {
    const s = new Seat(name, price);
    seats.push(s);
  }

  const s = new Section();
  s.name = name;
  s.price = price;
  s.seats = seats;
  let found = false;

  Section.findOne(
      { name },
       (err,section) => {
         if (!err) {
          found=true;
         }
      });

  if (!found) {
    s.save(s, (err, section) => {
      if (!err) {
        console.log('status: Successfully Created Section:' + section.name);
        res.send({ ok: seats.length });
      } else {
        console.log('status: FAILED To Create Section:' + section.name);
        res.send({ failed: -999 });
      }
     });
  } else {
    Section.findOne(
        { name },
         (err, section) => {
           if (!err) {
              section.seats.pushAll(seats);
              section.save( (err, sectionSaved) => {
                if (!err) {
                  console.log('status: Successfully Updated Seats for Section:' + sectionSaved.name);
                  res.send({ok: seats.length});
                } else {
                  onsole.log('status: FAILED To Update Seats for Section:' + sectionSaved.name);
                  res.send({failed: -999});
                }
              });
           }
        });
    }
});


router.post('/:id/purchase', (req, res) => {
  Seat.findById(req.params.id, (err1, seat) => {
    seat.isPurchased(true);
    seat.save(() => res.send({ seat }));
  });
});
