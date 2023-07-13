const express = require('express');

const router = express.Router();

const kulinerControllers = require('../controllers/kuliners');

router.get('/', kulinerControllers.getAllkuliners);
router.post('/store', kulinerControllers.createNewkuliners);
router.get('/show/:id', kulinerControllers.getkulinerById);
router.patch('/update/:id', kulinerControllers.updatekuliners);
router.post('/update/:id', kulinerControllers.updatekuliners);
router.get('/delete/:id', kulinerControllers.deletekuliners);
router.delete('/delete/:id', kulinerControllers.deletekuliners);

module.exports = router;