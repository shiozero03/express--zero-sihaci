const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const connection = require('../config/database');
const laporansModels = require('../models/laporans')
router.use(bodyParser.json());

const getAlllaporans = (req, res) => {
	const limit = parseInt(req.query.limit) || 0;
	const page = parseInt(req.query.page) || 1;
	const offset = (page - 1) * limit;
	const data = {limit, offset}
	laporansModels.getAllLaporans(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get all data laporans success",
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

const getlaporanById = (req, res) => {
	const { id } = req.params;

	laporansModels.getLaporansById(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get data laporans by id success",
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

const getlaporanByHotel = (req, res) => {
	const { id } = req.params;

	laporansModels.getLaporansByHotel(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get data laporans by id hotel success",
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

const createNewlaporans = (req, res) => {
  	const data = {
  		id_hotel: req.body.id_hotel,
		tanggal_laporan: req.body.tanggal_laporan,
		klasifikasi_hotel: req.body.klasifikasi_hotel,
		jumlah_kamar_dimiliki: req.body.jumlah_kamar_dimiliki,
		jumlah_kamar_terjual: req.body.jumlah_kamar_terjual,
		jumlah_wisatawan_lokal: req.body.jumlah_wisatawan_lokal,
		jumlah_wisatawan_asia: req.body.jumlah_wisatawan_asia,
		jumlah_wisatawan_afrika: req.body.jumlah_wisatawan_afrika,
		jumlah_wisatawan_amerika_utara: req.body.jumlah_wisatawan_amerika_utara,
		jumlah_wisatawan_amerika_selatan: req.body.jumlah_wisatawan_amerika_selatan,
		jumlah_wisatawan_antartika: req.body.jumlah_wisatawan_antartika,
		jumlah_wisatawan_eropa: req.body.jumlah_wisatawan_eropa,
		jumlah_wisatawan_australia: req.body.jumlah_wisatawan_australia,
		jumlah_karyawan_lakilaki: req.body.jumlah_karyawan_lakilaki,
		jumlah_karyawan_perempuan: req.body.jumlah_karyawan_perempuan,
		rata_rata_lama_tinggal: req.body.rata_rata_lama_tinggal
  	};

	laporansModels.storeLaporans(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Create data laporans success",
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

const updatelaporans = (req, res) => {
	const {id} = req.params;
  	const data = {
  		id_laporan: id,
  		id_hotel: req.body.id_hotel,
		tanggal_laporan: req.body.tanggal_laporan,
		klasifikasi_hotel: req.body.klasifikasi_hotel,
		jumlah_kamar_dimiliki: req.body.jumlah_kamar_dimiliki,
		jumlah_kamar_terjual: req.body.jumlah_kamar_terjual,
		jumlah_wisatawan_lokal: req.body.jumlah_wisatawan_lokal,
		jumlah_wisatawan_asia: req.body.jumlah_wisatawan_asia,
		jumlah_wisatawan_afrika: req.body.jumlah_wisatawan_afrika,
		jumlah_wisatawan_amerika_utara: req.body.jumlah_wisatawan_amerika_utara,
		jumlah_wisatawan_amerika_selatan: req.body.jumlah_wisatawan_amerika_selatan,
		jumlah_wisatawan_antartika: req.body.jumlah_wisatawan_antartika,
		jumlah_wisatawan_eropa: req.body.jumlah_wisatawan_eropa,
		jumlah_wisatawan_australia: req.body.jumlah_wisatawan_australia,
		jumlah_karyawan_lakilaki: req.body.jumlah_karyawan_lakilaki,
		jumlah_karyawan_perempuan: req.body.jumlah_karyawan_perempuan,
		rata_rata_lama_tinggal: req.body.rata_rata_lama_tinggal
  	};

  	console.log(data)
	laporansModels.updateLaporans(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Update data laporans success",
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

const deletelaporans = (req, res) => {
	const { id } = req.params;

	laporansModels.deleteLaporans(id)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Delete data laporans by id success",
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

module.exports = { getAlllaporans, getlaporanById, getlaporanByHotel, createNewlaporans, updatelaporans, deletelaporans };