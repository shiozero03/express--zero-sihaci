const express = require('express');

const router = express.Router();

const akomodasiControllers = require('../controllers/akomodasis');

router.get('/', akomodasiControllers.getAllakomodasis);
router.post('/store', akomodasiControllers.createNewakomodasis);
router.get('/show/:id', akomodasiControllers.getakomodasiById);
router.get('/hotel/:id', akomodasiControllers.getakomodasiByHotel);
router.patch('/update/:id', akomodasiControllers.updateakomodasis);
router.post('/update/:id', akomodasiControllers.updateakomodasis);
router.get('/delete/:id', akomodasiControllers.deleteakomodasis);
router.delete('/delete/:id', akomodasiControllers.deleteakomodasis);

module.exports = router;