const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const connection = require('../config/database');
const kulinersModels = require('../models/kuliners')
router.use(bodyParser.json());

const getAllkuliners = (req, res) => {
	const limit = parseInt(req.query.limit) || 0;
	const page = parseInt(req.query.page) || 1;
	const offset = (page - 1) * limit;
	const data = {limit, offset}
	kulinersModels.getAllKuliners(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get all data kuliners success",
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

const createNewkuliners = (req, res) => {
  	if (!req.files || !req.files.image_kuliner) { return res.status(400).json({ message: 'No image uploaded' }); }
  	if (!req.files || !req.files.banner_kuliner) { return res.status(400).json({ message: 'No banner uploaded' }); }


  	const image = req.files.image_kuliner;
  	const imageName = Date.now() + '_image_' + image.name;
	const imagePath = path.join(__dirname, '../../public/images/kuliners', imageName);
  	image.mv(imagePath, (err) => {
	    if (err) {
      		return res.status(500).json({ status: 500, message: 'Failed to upload image', error: err });
    	}
    });


  	const banner = req.files.banner_kuliner;
  	bannerName = Date.now() + '_banner_' + banner.name;
		const bannerPath = path.join(__dirname, '../../public/images/kuliners', bannerName);
		banner.mv(bannerPath, (err) => {
	    if (err) {
      		return res.status(500).json({ status: 500, message: 'Failed to upload banner', error: err });
    	}
    });

  	const data = {
  		nama_kuliner: req.body.nama_kuliner,
		alamat_kuliner: req.body.alamat_kuliner,
		banner_kuliner: bannerName,
		image_kuliner: imageName,
		deskripsi_kuliner: req.body.deskripsi_kuliner,
		link_gmaps: req.body.link_gmaps,
		link_instagram: req.body.link_instagram,
		link_shopee: req.body.link_shopee,
		link_tokopedia: req.body.link_tokopedia
  	};

	kulinersModels.storeKuliners(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Create data kuliner success",
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

const getkulinerById = (req, res) => {
	const { id } = req.params;

	kulinersModels.getKulinersById(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get data kuliners by id success",
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

const updatekuliners = (req, res) => {
	const {id} = req.params;
	connection.queryPromise('SELECT * FROM kuliners WHERE id_kuliner = ?', id, (error, results) => {
  		
  		let imageName = '';
  		let bannerName = '';

	  	if (!req.files || !req.files.image_kuliner) {
	  		imageName = results[0].image_kuliner
	  	} else {
		  	const image = req.files.image_kuliner;
		  	imageName = Date.now() + '_image_' + image.name;
	  		const imagePath = path.join(__dirname, '../../public/images/kuliners', imageName);
		  	image.mv(imagePath, (err) => {
			    if (err) {
		      		return res.status(500).json({ status: 500, message: 'Failed to upload image', error: err });
		    	}
		    });

	  	}
	  	if (!req.files || !req.files.banner_kuliner) {
	  		bannerName = results[0].banner_kuliner
	  	} else {
		  	const banner = req.files.banner_kuliner;
		  	bannerName = Date.now() + '_banner_' + banner.name;
	  		const bannerPath = path.join(__dirname, '../../public/images/kuliners', bannerName);
	  		banner.mv(bannerPath, (err) => {
			    if (err) {
		      		return res.status(500).json({ status: 500, message: 'Failed to upload banner', error: err });
		    	}
		    });
	  	}

	  	const data = {
	  		id_kuliner: id,
	  		nama_kuliner: req.body.nama_kuliner,
			alamat_kuliner: req.body.alamat_kuliner,
			banner_kuliner: bannerName,
			image_kuliner: imageName,
			deskripsi_kuliner: req.body.deskripsi_kuliner,
			link_gmaps: req.body.link_gmaps,
			link_instagram: req.body.link_instagram,
			link_shopee: req.body.link_shopee,
			link_tokopedia: req.body.link_tokopedia
	  	};

	  	console.log(data)
    	kulinersModels.updateKuliners(data)
	    .then(modelsData => {
			res.status(200).json({
				status: 200,
				message: "Update data kuliner success",
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

const deletekuliners = (req, res) => {
	const { id } = req.params;

	kulinersModels.deleteKuliners(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Delete data kuliners by id success",
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

module.exports = { getAllkuliners, createNewkuliners, getkulinerById, updatekuliners, deletekuliners };
