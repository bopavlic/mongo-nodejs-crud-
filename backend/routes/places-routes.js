const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const placesControllers = require('../controllers/places-controllers');

const {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace,
} = placesControllers;

router.get('/:pid', getPlaceById);

router.get('/user/:uid', getPlacesByUserId);

router.post(
  '/',
  [
    check('title').not.isEmpty(),
    check('description').isLength({ min: 5 }).check('address').not.isEmpty(),
  ],
  createPlace
);

router.patch('/:pid', updatePlace);

router.delete('/:pid', deletePlace);

module.exports = router;
