const express = require('express');

const router = express.Router();

const laporanControllers = require('../controllers/laporans');

router.get('/', laporanControllers.getAlllaporans);
router.post('/store', laporanControllers.createNewlaporans);
router.get('/show/:id', laporanControllers.getlaporanById);
router.patch('/update/:id', laporanControllers.updatelaporans);
router.post('/update/:id', laporanControllers.updatelaporans);
router.get('/delete/:id', laporanControllers.deletelaporans);
router.delete('/delete/:id', laporanControllers.deletelaporans);

module.exports = router;