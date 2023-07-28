const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const connection = require('../config/database');
const akomodasisModels = require('../models/akomodasis')
router.use(bodyParser.json());

const getAllakomodasis = (req, res) => {
	const limit = parseInt(req.query.limit) || 0;
	const page = parseInt(req.query.page) || 1;
	const category = req.query.category || 0;
	const offset = (page - 1) * limit;
	const data = {limit, offset, category}
	akomodasisModels.getAllAkomodasis(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get all data akomodasis success",
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

const getakomodasiById = (req, res) => {
	const { id } = req.params;

	akomodasisModels.getakomodasisById(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get data akomodasis by id success",
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

const getakomodasiByHotel = (req, res) => {
	const { id } = req.params;

	akomodasisModels.getakomodasiByHotel(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get data akomodasis by id hotel success",
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

const createNewakomodasis = (req, res) => {
  	if (!req.files || !req.files.image_akomodasi) { return res.status(400).json({ message: 'No image uploaded' }); }
  	if (!req.files || !req.files.banner_akomodasi) { return res.status(400).json({ message: 'No banner uploaded' }); }


  	const image = req.files.image_akomodasi;
  	const imageName = Date.now() + '_image_' + image.name;
	const imagePath = path.join(__dirname, '../../public/images/akomodasis', imageName);
  	image.mv(imagePath, (err) => {
	    if (err) {
      		return res.status(500).json({ status: 500, message: 'Failed to upload image', error: err });
    	}
    });


  	const banner = req.files.banner_akomodasi;
  	bannerName = Date.now() + '_banner_' + banner.name;
		const bannerPath = path.join(__dirname, '../../public/images/akomodasis', bannerName);
		banner.mv(bannerPath, (err) => {
	    if (err) {
      		return res.status(500).json({ status: 500, message: 'Failed to upload banner', error: err });
    	}
    });

  	const data = {
  		id_hotel: req.body.id_hotel,
		nama_akomodasi: req.body.nama_akomodasi,
		kategori_hotel: req.body.kategori_hotel,
		harga_terendah: req.body.harga_terendah,
		harga_tertinggi: req.body.harga_tertinggi,
		nomor_telepon: req.body.nomor_telepon,
		alamat_akomodasi: req.body.alamat_akomodasi,
		banner_akomodasi: bannerName,
		image_akomodasi: imageName,
		deskripsi_akomodasi: req.body.deskripsi_akomodasi,
		link_gmaps: req.body.link_gmaps,
		link_website: req.body.link_website,
		link_instagram: req.body.link_instagram,
		link_youtube: req.body.link_youtube,
		link_twitter: req.body.link_twitter,
		link_facebook: req.body.link_facebook
  	};

	akomodasisModels.storeAkomodasis(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Create data akomodasi success",
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

const updateakomodasis = (req, res) => {
	const {id} = req.params;
	connection.queryPromise('SELECT * FROM akomodasis WHERE id_akomodasi = ?', id, (error, results) => {
  		
  		let imageName = '';
  		let bannerName = '';

	  	if (!req.files || !req.files.image_akomodasi) {
	  		imageName = results[0].image_akomodasi
	  	} else {
		  	const image = req.files.image_akomodasi;
		  	imageName = Date.now() + '_image_' + image.name;
	  		const imagePath = path.join(__dirname, '../../public/images/akomodasis', imageName);
		  	image.mv(imagePath, (err) => {
			    if (err) {
		      		return res.status(500).json({ status: 500, message: 'Failed to upload image', error: err });
		    	}
		    });

	  	}
	  	if (!req.files || !req.files.banner_akomodasi) {
	  		bannerName = results[0].banner_akomodasi
	  	} else {
		  	const banner = req.files.banner_akomodasi;
		  	bannerName = Date.now() + '_banner_' + banner.name;
	  		const bannerPath = path.join(__dirname, '../../public/images/akomodasis', bannerName);
	  		banner.mv(bannerPath, (err) => {
			    if (err) {
		      		return res.status(500).json({ status: 500, message: 'Failed to upload banner', error: err });
		    	}
		    });
	  	}

	  	const data = {
	  		id_akomodasi: id,
	  		id_hotel: req.body.id_hotel,
			nama_akomodasi: req.body.nama_akomodasi,
			kategori_hotel: req.body.kategori_hotel,
			harga_terendah: req.body.harga_terendah,
			harga_tertinggi: req.body.harga_tertinggi,
			nomor_telepon: req.body.nomor_telepon,
			alamat_akomodasi: req.body.alamat_akomodasi,
			banner_akomodasi: bannerName,
			image_akomodasi: imageName,
			deskripsi_akomodasi: req.body.deskripsi_akomodasi,
			link_gmaps: req.body.link_gmaps,
			link_website: req.body.link_website,
			link_instagram: req.body.link_instagram,
			link_youtube: req.body.link_youtube,
			link_twitter: req.body.link_twitter,
			link_facebook: req.body.link_facebook
	  	};

	  	console.log(data)
    	akomodasisModels.updateAkomodasis(data)
	    .then(modelsData => {
			res.status(200).json({
				status: 200,
				message: "Update data akomodasi success",
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

const deleteakomodasis = (req, res) => {
	const { id } = req.params;

	akomodasisModels.deleteakomodasis(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Delete data akomodasis by id success",
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

module.exports = { getAllakomodasis, getakomodasiById, getakomodasiByHotel, createNewakomodasis, updateakomodasis, deleteakomodasis };