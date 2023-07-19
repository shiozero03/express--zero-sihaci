const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require('bcrypt');

const connection = require('../config/database');
const userModels = require('../models/users')
router.use(bodyParser.json());

const loginUsers = (req, res) => {
	const {username, password} = req.body
	const setBody = { username: username }
	userModels.loginUsers(setBody)
    .then(modelsData => {
    	if(modelsData == ''){
    		res.status(400).json({
				status: 400,
				message: "Username atau password salah"
			});
    	} else {
    		bcrypt.compare(password, modelsData[0].password, (err, result) => {
  				if(err){
  					console.error('Terjadi kesalahan saat pengecekan password:', err);
        			res.status(500).json({ error: 'Internal server error' });
  				} else {
  					if(result){
  						res.status(200).json({
  							status: 200,
  							message: 'Login berhasil',
  							data: modelsData[0]
  						});
  					} else {
  						res.status(400).json({
							status: 400,
							message: "Username atau password salah"
						});
  					}
  				}
  			});
    	}
    });
}

module.exports = { loginUsers }