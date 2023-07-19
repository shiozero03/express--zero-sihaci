const express = require('express');

const router = express.Router();

const userControllers = require('../controllers/users');

router.post('/login', userControllers.loginUsers);

module.exports = router;