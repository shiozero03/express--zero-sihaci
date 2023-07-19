const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require('bcrypt');

const connection = require('../config/database');
const adminModels = require('../models/admins')
router.use(bodyParser.json());

const getAllAdmins = (req, res) => {
	adminModels.getAllAdmins()
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get all data admin success",
			data: modelsData
		});
    })
    .catch(error => {
		console.error('Error executing MySQL query:', error);
		res.status(500).json({
			status: 500,
			message: 'Internal server error',
			error: error
		});
    });
};

const createNewAdmins = (req, res) => {
	const {nama_admin, username, password} = req.body
	if (!nama_admin || !username || !password) {
    	return res.status(400).json({
    		status: 400,
    		message: 'Nama admin, username, dan password harus diisi'
    	});
  	} else {
  		connection.queryPromise('SELECT * FROM users WHERE username = ?', username, (error, results) => {
	  		if (error) {
	  			return res.status(500).json({
		    		status: 500,
		    		message: 'Terjadi kesalahan saat memeriksa keunikan username'
		    	});
		    }
		    if (results.length > 0) {
		    	return res.status(400).json({
		    		status: 400,
		    		message: 'Username sudah digunakan, harap gunakan username lain'
		    	});
		    } else {
		    	bcrypt.hash(password, 10, (err, hashedPassword) => {
		    		const setBody = { nama_admin: nama_admin, username: username, password: hashedPassword }
					adminModels.storeAdmins(setBody)
				    .then(modelsData => {
						res.status(200).json({
							status: 200,
							message: "Create data admin success",
							data: setBody
						});
				    })
				    .catch(error => {
						console.error('Error executing MySQL query:', error);
						res.status(500).json({
							status: 500,
							message: 'Internal server error',
							error: error
						});
				    });
		    	})
		    }
	  	});
  	}
};

const getAdminById = (req, res) => {
	const { id } = req.params;

	adminModels.getAllAdminsById(id)
    .then(modelsData => {
		res.json({
			status: 200,
			message: "Show data admin by id successfully",
			data: modelsData
		});
    })
    .catch(error => {
		console.error('Error executing MySQL query:', error);
		res.status(500).json({
			status: 500,
			message: 'Internal server error',
			error: error
		});
    });
}

const updateAdmins = (req, res) => {
	const {id} = req.params;
	const {nama_admin, username, password} = req.body;

	if (!nama_admin || !username || !password) {
    	return res.status(400).json({
    		status: 400,
    		message: 'Nama admin, username, dan password harus diisi'
    	});
  	} else {
  		connection.queryPromise('SELECT * FROM users WHERE id_user = ?', id, (error, results) => {
	  		if (error) {
	  			return res.status(500).json({
		    		status: 500,
		    		message: 'Terjadi kesalahan saat memeriksa id'
		    	});
		    } else {
		    	if(results == ''){
		    		return res.status(404).json({
			    		status: 404,
			    		message: 'Id tidak ditemukan'
			    	});
		    	} else {
		    		if(password === results[0].password){
			    		if(username != results[0].username){
			    			connection.queryPromise('SELECT * FROM users WHERE username = ?', username, (error2, results2) => {
						  		if (error2) {
						  			return res.status(500).json({
							    		status: 500,
							    		message: 'Terjadi kesalahan saat memeriksa username'
							    	});
							    } else {
							    	if(results2.length > 0){
						    			res.status(400).json({
											status: 400,
											message: 'Username sudah digunakan, harap gunakan username lain'
										});
							    	} else {
							    		const setBody = { nama_admin: nama_admin, username: username, password: password, id_admin: id }
										adminModels.updateAdmins(setBody)
									    .then(modelsData => {
											res.status(200).json({
												status: 200,
												message: "Update data admin success",
												data: setBody
											});
									    })
									    .catch(error => {
											console.error('Error executing MySQL query:', error);
											res.status(500).json({
												status: 500,
												message: 'Internal server error',
												error: error
											});
									    });
							    	}
							    }
							});
			    		} else {
			    			const setBody = { nama_admin: nama_admin, username: username, password: password, id_admin: id }
							adminModels.updateAdmins(setBody)
						    .then(modelsData => {
								res.status(200).json({
									status: 200,
									message: "Update data admin success",
									data: setBody
								});
						    })
						    .catch(error => {
								console.error('Error executing MySQL query:', error);
								res.status(500).json({
									status: 500,
									message: 'Internal server error',
									error: error
								});
						    });
			    		}
		    			
		    		} else {
			    		bcrypt.hash(password, 10, (err, hashedPassword) => {
			    			if(username != results[0].username){
				    			connection.queryPromise('SELECT * FROM users WHERE username = ?', username, (error2, results2) => {
							  		if (error2) {
							  			return res.status(500).json({
								    		status: 500,
								    		message: 'Terjadi kesalahan saat memeriksa username'
								    	});
								    } else {
								    	if(results2.length > 0){
							    			res.status(400).json({
												status: 400,
												message: 'Username sudah digunakan, harap gunakan username lain'
											});
								    	} else {
								    		const setBody = { nama_admin: nama_admin, username: username, password: hashedPassword, id_admin: id }
											adminModels.updateAdmins(setBody)
										    .then(modelsData => {
												res.status(200).json({
													status: 200,
													message: "Update data admin success",
													data: setBody
												});
										    })
										    .catch(error => {
												console.error('Error executing MySQL query:', error);
												res.status(500).json({
													status: 500,
													message: 'Internal server error',
													error: error
												});
										    });
								    	}
								    }
								});
				    		} else {
				    			const setBody = { nama_admin: nama_admin, username: username, password: hashedPassword, id_admin: id }
								adminModels.updateAdmins(setBody)
							    .then(modelsData => {
									res.status(200).json({
										status: 200,
										message: "Update data admin success",
										data: setBody
									});
							    })
							    .catch(error => {
									console.error('Error executing MySQL query:', error);
									res.status(500).json({
										status: 500,
										message: 'Internal server error',
										error: error
									});
							    });
				    		}
			    			
			    		})
		    		}
		    	}
		    }
		});
  	}
};

const deleteAdmins = (req, res) => {
	const { id } = req.params;

	adminModels.deleteAdmins(id)
    .then(modelsData => {
		res.json({
			status: 200,
			message: "Delete data admin by id successfully",
			data: modelsData
		});
    })
    .catch(error => {
		console.error('Error executing MySQL query:', error);
		res.status(500).json({
			status: 500,
			message: 'Internal server error',
			error: error
		});
    });
};

module.exports = {
	getAllAdmins,
	createNewAdmins,
	updateAdmins,
	deleteAdmins,
	getAdminById
}