const express = require('express');

const router = express.Router();

const eventControllers = require('../controllers/events');

router.get('/', eventControllers.getAllevents);
router.post('/store', eventControllers.createNewevents);
router.get('/show/:id', eventControllers.geteventById);
router.patch('/update/:id', eventControllers.updateevents);
router.post('/update/:id', eventControllers.updateevents);
router.get('/delete/:id', eventControllers.deleteevents);
router.delete('/delete/:id', eventControllers.deleteevents);

module.exports = router;