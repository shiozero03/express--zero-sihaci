const express = require('express');

const router = express.Router();

const adminControllers = require('../controllers/admins');

router.get('/', adminControllers.getAllAdmins);
router.post('/store', adminControllers.createNewAdmins);
router.get('/show/:id', adminControllers.getAdminById);
router.post('/update/:id', adminControllers.updateAdmins);
router.patch('/update/:id', adminControllers.updateAdmins);
router.get('/delete/:id', adminControllers.deleteAdmins);
router.delete('/delete/:id', adminControllers.deleteAdmins);
router.post('/login', adminControllers.loginAdmins);

module.exports = router;