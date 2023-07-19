const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require('bcrypt');

const connection = require('../config/database');
const hotelModels = require('../models/hotels')
router.use(bodyParser.json());

const getAllHotels = (req, res) => {
	hotelModels.getAllHotels()
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get all data hotel success",
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

const createNewHotels = (req, res) => {
	const {nama_hotel, username, password} = req.body
	if (!nama_hotel || !username || !password) {
    	return res.status(400).json({
    		status: 400,
    		message: 'Nama hotel, username, dan password harus diisi'
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
		    		const setBody = { nama_hotel: nama_hotel, username: username, password: hashedPassword }
					hotelModels.storeHotels(setBody)
				    .then(modelsData => {
						res.status(200).json({
							status: 200,
							message: "Create data hotel success",
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

const getHotelById = (req, res) => {
	const { id } = req.params;

	hotelModels.getAllHotelsById(id)
    .then(modelsData => {
		res.json({
			status: 200,
			message: "Show data hotel by id successfully",
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

const updateHotels = (req, res) => {
	const {id} = req.params;
	const {nama_hotel, username, password} = req.body;

	if (!nama_hotel || !username || !password) {
    	return res.status(400).json({
    		status: 400,
    		message: 'Nama hotel, username, dan password harus diisi'
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
							    		const setBody = { nama_hotel: nama_hotel, username: username, password: password, id_hotel: id }
										hotelModels.updateHotels(setBody)
									    .then(modelsData => {
											res.status(200).json({
												status: 200,
												message: "Update data hotel success",
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
			    			const setBody = { nama_hotel: nama_hotel, username: username, password: password, id_hotel: id }
							hotelModels.updateHotels(setBody)
						    .then(modelsData => {
								res.status(200).json({
									status: 200,
									message: "Update data hotel success",
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
								    		const setBody = { nama_hotel: nama_hotel, username: username, password: hashedPassword, id_hotel: id }
											hotelModels.updateHotels(setBody)
										    .then(modelsData => {
												res.status(200).json({
													status: 200,
													message: "Update data hotel success",
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
				    			const setBody = { nama_hotel: nama_hotel, username: username, password: hashedPassword, id_hotel: id }
								hotelModels.updateHotels(setBody)
							    .then(modelsData => {
									res.status(200).json({
										status: 200,
										message: "Update data hotel success",
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

const deleteHotels = (req, res) => {
	const { id } = req.params;

	hotelModels.deleteHotels(id)
    .then(modelsData => {
		res.json({
			status: 200,
			message: "Delete data hotel by id successfully",
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
	getAllHotels,
	createNewHotels,
	updateHotels,
	deleteHotels,
	getHotelById
}