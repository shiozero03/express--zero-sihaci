const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const connection = require('../config/database');
const travelsModels = require('../models/travels')
router.use(bodyParser.json());

const getAllTravels = (req, res) => {
	const limit = parseInt(req.query.limit) || 0;
	const page = parseInt(req.query.page) || 1;
	const offset = (page - 1) * limit;
	const data = {limit, offset}
	travelsModels.getAllTravels(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get all data travels success",
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

const gettravelById = (req, res) => {
	const { id } = req.params;

	travelsModels.gettravelsById(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get data travels by id success",
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

const createNewtravels = (req, res) => {
  	if (!req.files || !req.files.image_travel) { return res.status(400).json({ message: 'No image uploaded' }); }
  	if (!req.files || !req.files.banner_travel) { return res.status(400).json({ message: 'No banner uploaded' }); }


  	const image = req.files.image_travel;
  	const imageName = Date.now() + '_image_' + image.name;
	const imagePath = path.join(__dirname, '../../public/images/travels', imageName);
  	image.mv(imagePath, (err) => {
	    if (err) {
      		return res.status(500).json({ status: 500, message: 'Failed to upload image', error: err });
    	}
    });


  	const banner = req.files.banner_travel;
  	bannerName = Date.now() + '_banner_' + banner.name;
		const bannerPath = path.join(__dirname, '../../public/images/travels', bannerName);
		banner.mv(bannerPath, (err) => {
	    if (err) {
      		return res.status(500).json({ status: 500, message: 'Failed to upload banner', error: err });
    	}
    });

  	const data = {
  		nama_travel: req.body.nama_travel,
		jam_buka: req.body.jam_buka,
		jam_tutup: req.body.jam_tutup,
		trip_dan_harga: req.body.trip_dan_harga,
		alamat_travel: req.body.alamat_travel,
		nomor_telepon_travel: req.body.nomor_telepon_travel,
		banner_travel: bannerName,
		image_travel: imageName,
		deskripsi_travel: req.body.deskripsi_travel,
		link_gmaps: req.body.link_gmaps,
		link_website: req.body.link_website,
		link_instagram: req.body.link_instagram,
		link_facebook: req.body.link_facebook,
		link_twitter: req.body.link_twitter
  	};

	travelsModels.storeTravels(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Create data travel success",
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
};

const updatetravels = (req, res) => {
	const {id} = req.params;
	connection.queryPromise('SELECT * FROM travels WHERE id_travel = ?', id, (error, results) => {
  		
  		let imageName = '';
  		let bannerName = '';

	  	if (!req.files || !req.files.image_travel) {
	  		imageName = results[0].image_travel
	  	} else {
		  	const image = req.files.image_travel;
		  	imageName = Date.now() + '_image_' + image.name;
	  		const imagePath = path.join(__dirname, '../../public/images/travels', imageName);
		  	image.mv(imagePath, (err) => {
			    if (err) {
		      		return res.status(500).json({ status: 500, message: 'Failed to upload image', error: err });
		    	}
		    });

	  	}
	  	if (!req.files || !req.files.banner_travel) {
	  		bannerName = results[0].banner_travel
	  	} else {
		  	const banner = req.files.banner_travel;
		  	bannerName = Date.now() + '_banner_' + banner.name;
	  		const bannerPath = path.join(__dirname, '../../public/images/travels', bannerName);
	  		banner.mv(bannerPath, (err) => {
			    if (err) {
		      		return res.status(500).json({ status: 500, message: 'Failed to upload banner', error: err });
		    	}
		    });
	  	}

	  	const data = {
	  		id_travel: id,
	  		nama_travel: req.body.nama_travel,
			jam_buka: req.body.jam_buka,
			jam_tutup: req.body.jam_tutup,
			trip_dan_harga: req.body.trip_dan_harga,
			alamat_travel: req.body.alamat_travel,
			nomor_telepon_travel: req.body.nomor_telepon_travel,
			banner_travel: bannerName,
			image_travel: imageName,
			deskripsi_travel: req.body.deskripsi_travel,
			link_gmaps: req.body.link_gmaps,
			link_website: req.body.link_website,
			link_instagram: req.body.link_instagram,
			link_facebook: req.body.link_facebook,
			link_twitter: req.body.link_twitter
	  	};

	  	console.log(data)
    	travelsModels.updateTravels(data)
	    .then(modelsData => {
			res.status(200).json({
				status: 200,
				message: "Update data travel success",
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

const deletetravels = (req, res) => {
	const { id } = req.params;

	travelsModels.deletetravels(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Delete data travels by id success",
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

module.exports = { getAllTravels, gettravelById, createNewtravels, updatetravels, deletetravels };