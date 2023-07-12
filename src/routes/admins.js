const express = require('express');

const router = express.Router();

const adminControllers = require('../controllers/admins');

router.get('/', adminControllers.getAllAdmins);
router.post('/store', adminControllers.createNewAdmins);
router.get('/show/:id', adminControllers.getAdminById);
router.patch('/update/:id', adminControllers.updateAdmins);
router.delete('/delete/:id', adminControllers.deleteAdmins);
router.post('/login', adminControllers.loginAdmins);

module.exports = router;