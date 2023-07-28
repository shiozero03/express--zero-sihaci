const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const connection = require('../config/database');
const wisatasModels = require('../models/wisatas')
router.use(bodyParser.json());

const getAllwisatas = (req, res) => {
	const limit = parseInt(req.query.limit) || 0;
	const page = parseInt(req.query.page) || 1;
	const category = req.query.category || 0;
	const offset = (page - 1) * limit;
	const data = {limit, offset, category}
	wisatasModels.getAllWisata(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get all data wisatas success",
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

const getwisataById = (req, res) => {
	const { id } = req.params;

	wisatasModels.getwisatasById(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get data wisatas by id success",
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

const createNewwisatas = (req, res) => {
  	if (!req.files || !req.files.image_wisata) { return res.status(400).json({ message: 'No image uploaded' }); }
  	if (!req.files || !req.files.banner_wisata) { return res.status(400).json({ message: 'No banner uploaded' }); }


  	const image = req.files.image_wisata;
  	const imageName = Date.now() + '_image_' + image.name;
	const imagePath = path.join(__dirname, '../../public/images/wisatas', imageName);
  	image.mv(imagePath, (err) => {
	    if (err) {
      		return res.status(500).json({ status: 500, message: 'Failed to upload image', error: err });
    	}
    });


  	const banner = req.files.banner_wisata;
  	bannerName = Date.now() + '_banner_' + banner.name;
	const bannerPath = path.join(__dirname, '../../public/images/wisatas', bannerName);
	banner.mv(bannerPath, (err) => {
    if (err) {
  		return res.status(500).json({ status: 500, message: 'Failed to upload banner', error: err });
	}
    });

  	const data = {
  		nama_wisata: req.body.nama_wisata,
		kategori_wisata: req.body.kategori_wisata,
		jam_buka_hari_kerja: req.body.jam_buka_hari_kerja,
		jam_tutup_hari_kerja: req.body.jam_tutup_hari_kerja,
		jam_buka_weekend: req.body.jam_buka_weekend,
		jam_tutup_weekend: req.body.jam_tutup_weekend,
		harga_tiket_hari_kerja: req.body.harga_tiket_hari_kerja,
		harga_tiket_weekend: req.body.harga_tiket_weekend,
		alamat_wisata: req.body.alamat_wisata,
		banner_wisata: bannerName,
		image_wisata: imageName,
		deskripsi_wisata: req.body.deskripsi_wisata,
		link_gmaps: req.body.link_gmaps,
		link_website: req.body.link_website,
		link_instagram: req.body.link_instagram,
		link_facebook: req.body.link_facebook,
		link_youtube: req.body.link_youtube,
		link_twitter: req.body.link_twitter
  	};

	wisatasModels.storeWisatas(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Create data wisata success",
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

const updatewisatas = (req, res) => {
	const {id} = req.params;
	connection.queryPromise('SELECT * FROM objek_wisatas WHERE id_wisata = ?', id, (error, results) => {
  		
  		let imageName = '';
  		let bannerName = '';

	  	if (!req.files || !req.files.image_wisata) {
	  		imageName = results[0].image_wisata
	  	} else {
		  	const image = req.files.image_wisata;
		  	imageName = Date.now() + '_image_' + image.name;
	  		const imagePath = path.join(__dirname, '../../public/images/wisatas', imageName);
		  	image.mv(imagePath, (err) => {
			    if (err) {
		      		return res.status(500).json({ status: 500, message: 'Failed to upload image', error: err });
		    	}
		    });

	  	}
	  	if (!req.files || !req.files.banner_wisata) {
	  		bannerName = results[0].banner_wisata
	  	} else {
		  	const banner = req.files.banner_wisata;
		  	bannerName = Date.now() + '_banner_' + banner.name;
	  		const bannerPath = path.join(__dirname, '../../public/images/wisatas', bannerName);
	  		banner.mv(bannerPath, (err) => {
			    if (err) {
		      		return res.status(500).json({ status: 500, message: 'Failed to upload banner', error: err });
		    	}
		    });
	  	}

	  	const data = {
	  		id_wisata: id,
	  		nama_wisata: req.body.nama_wisata,
			kategori_wisata: req.body.kategori_wisata,
			jam_buka_hari_kerja: req.body.jam_buka_hari_kerja,
			jam_tutup_hari_kerja: req.body.jam_tutup_hari_kerja,
			jam_buka_weekend: req.body.jam_buka_weekend,
			jam_tutup_weekend: req.body.jam_tutup_weekend,
			harga_tiket_hari_kerja: req.body.harga_tiket_hari_kerja,
			harga_tiket_weekend: req.body.harga_tiket_weekend,
			alamat_wisata: req.body.alamat_wisata,
			banner_wisata: bannerName,
			image_wisata: imageName,
			deskripsi_wisata: req.body.deskripsi_wisata,
			link_gmaps: req.body.link_gmaps,
			link_website: req.body.link_website,
			link_instagram: req.body.link_instagram,
			link_facebook: req.body.link_facebook,
			link_youtube: req.body.link_youtube,
			link_twitter: req.body.link_twitter
	  	};

	  	console.log(data)
    	wisatasModels.updateWisatas(data)
	    .then(modelsData => {
			res.status(200).json({
				status: 200,
				message: "Update data wisata success",
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

const deletewisatas = (req, res) => {
	const { id } = req.params;

	wisatasModels.deletewisatas(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Delete data wisatas by id success",
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

module.exports = { getAllwisatas, getwisataById, createNewwisatas, updatewisatas, deletewisatas };