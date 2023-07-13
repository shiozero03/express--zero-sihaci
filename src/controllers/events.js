const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const connection = require('../config/database');
const eventModels = require('../models/events')
router.use(bodyParser.json());

const getAllevents = (req, res) => {
	const limit = parseInt(req.query.limit) || 100;
	const page = parseInt(req.query.page) || 1;
	const offset = (page - 1) * limit;
	const data = {limit, offset}
	eventModels.getAllEvents(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get all data events success",
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

const createNewevents = (req, res) => {
  	if (!req.files || !req.files.image_event) { return res.status(400).json({ message: 'No image uploaded' }); }
  	if (!req.files || !req.files.banner_event) { return res.status(400).json({ message: 'No banner uploaded' }); }

  	const image = req.files.image_event;
  	const imageName = Date.now() + '_image_' + image.name;

  	const banner = req.files.banner_event;
  	const bannerName = Date.now() + '_banner_' + banner.name;

  	const imagePath = path.join(__dirname, '../../public/images/events', imageName);
  	const bannerPath = path.join(__dirname, '../../public/images/events', bannerName);

  	const data = {
  		nama_event: req.body.nama_event,
  		image_event: imageName,
  		banner_event: bannerName,
  		deskripsi_event: req.body.deskripsi_event,
  	};

  	image.mv(imagePath, (err) => {
	    if (err) {
      		return res.status(500).json({ status: 500, message: 'Failed to upload image', error: err });
    	}
    	image.mv(bannerPath, (err) => {
		    if (err) {
		    	return res.status(500).json({ status: 500, message: 'Failed to upload banner', error: err });
	    	}
	    	eventModels.storeEvents(data)
		    .then(modelsData => {
				res.status(200).json({
					status: 200,
					message: "Create data event success",
					data: data
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
  	});
};

const geteventById = (req, res) => {
	const { id } = req.params;

	eventModels.geteventById(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get data events by id success",
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

const updateevents = (req, res) => {
	const {id} = req.params;
	connection.queryPromise('SELECT * FROM events WHERE id_event = ?', id, (error, results) => {
		// console.log(results[0]);
		// res.json({data: results[0]})
  		
  		let imageName = '';
  		let bannerName = '';

	  	if (!req.files || !req.files.image_event) {
	  		imageName = results[0].image_event
	  	} else {
		  	const image = req.files.image_event;
		  	imageName = Date.now() + '_image_' + image.name;
	  		const imagePath = path.join(__dirname, '../../public/images/events', imageName);
		  	image.mv(imagePath, (err) => {
			    if (err) {
		      		return res.status(500).json({ status: 500, message: 'Failed to upload image', error: err });
		    	}
		    });

	  	}
	  	if (!req.files || !req.files.banner_event) {
	  		bannerName = results[0].banner_event
	  	} else {
		  	const banner = req.files.banner_event;
		  	bannerName = Date.now() + '_banner_' + banner.name;
	  		const bannerPath = path.join(__dirname, '../../public/images/events', bannerName);
	  		banner.mv(bannerPath, (err) => {
			    if (err) {
		      		return res.status(500).json({ status: 500, message: 'Failed to upload banner', error: err });
		    	}
		    });
	  	}

	  	const data = {
	  		id_event: id,
	  		nama_event: req.body.nama_event,
	  		image_event: imageName,
	  		banner_event: bannerName,
	  		deskripsi_event: req.body.deskripsi_event,
	  	};

    	eventModels.updateEvents(data)
	    .then(modelsData => {
			res.status(200).json({
				status: 200,
				message: "Update data event success",
				data: data
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
	});
};

const deleteevents = (req, res) => {
	const { id } = req.params;

	eventModels.deleteevents(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Delete data events by id success",
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

module.exports = { getAllevents, createNewevents, geteventById, updateevents, deleteevents };
