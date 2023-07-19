const express = require('express');

const router = express.Router();

const wisataControllers = require('../controllers/wisatas');

router.get('/', wisataControllers.getAllwisatas);
router.post('/store', wisataControllers.createNewwisatas);
router.get('/show/:id', wisataControllers.getwisataById);
router.patch('/update/:id', wisataControllers.updatewisatas);
router.post('/update/:id', wisataControllers.updatewisatas);
router.get('/delete/:id', wisataControllers.deletewisatas);
router.delete('/delete/:id', wisataControllers.deletewisatas);

module.exports = router;