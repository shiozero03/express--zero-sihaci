const express = require('express');

const router = express.Router();

const hotelControllers = require('../controllers/hotels');

router.get('/', hotelControllers.getAllHotels);
router.post('/store', hotelControllers.createNewHotels);
router.get('/show/:id', hotelControllers.getHotelById);
router.patch('/update/:id', hotelControllers.updateHotels);
router.post('/update/:id', hotelControllers.updateHotels);
router.delete('/delete/:id', hotelControllers.deleteHotels);
router.get('/delete/:id', hotelControllers.deleteHotels);
router.post('/login', hotelControllers.loginHotels);

module.exports = router;