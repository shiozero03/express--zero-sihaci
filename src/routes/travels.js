const express = require('express');

const router = express.Router();

const travelControllers = require('../controllers/travels');

router.get('/', travelControllers.getAllTravels);
router.post('/store', travelControllers.createNewtravels);
router.get('/show/:id', travelControllers.gettravelById);
router.patch('/update/:id', travelControllers.updatetravels);
router.post('/update/:id', travelControllers.updatetravels);
router.get('/delete/:id', travelControllers.deletetravels);
router.delete('/delete/:id', travelControllers.deletetravels);

module.exports = router;