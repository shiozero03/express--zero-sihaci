const connection = require('../config/database');

const getAllLaporans = (body) => {
	if(body.limit == 0){
		const query = `SELECT * FROM laporan_hotels JOIN users ON laporan_hotels.id_hotel = users.id_user`;
		return connection.queryPromise(query);
	} else {
		const query = `SELECT * FROM laporan_hotels JOIN users ON laporan_hotels.id_hotel = users.id_user LIMIT ${body.limit} OFFSET ${body.offset}`;
		return connection.queryPromise(query);
	}
};

const storeLaporans = (body) => {
	const query = `
					INSERT INTO laporan_hotels
						(id_laporan, id_hotel, tanggal_laporan, klasifikasi_hotel, jumlah_kamar_dimiliki, jumlah_kamar_terjual, jumlah_wisatawan_lokal, jumlah_wisatawan_asia, jumlah_wisatawan_afrika, jumlah_wisatawan_amerika_utara, jumlah_wisatawan_amerika_selatan, jumlah_wisatawan_antartika, jumlah_wisatawan_eropa, jumlah_wisatawan_australia, jumlah_karyawan_lakilaki, jumlah_karyawan_perempuan, rata_rata_lama_tinggal)
					VALUES 
						(NULL, ${body.id_hotel}, ${body.tanggal_laporan}, ${body.klasifikasi_hotel}, ${body.jumlah_kamar_dimiliki}, ${body.jumlah_kamar_terjual}, ${body.jumlah_wisatawan_lokal}, ${body.jumlah_wisatawan_asia}, ${body.jumlah_wisatawan_afrika}, ${body.jumlah_wisatawan_amerika_utara}, ${body.jumlah_wisatawan_amerika_selatan}, ${body.jumlah_wisatawan_antartika}, ${body.jumlah_wisatawan_eropa}, ${body.jumlah_wisatawan_australia}, ${body.jumlah_karyawan_lakilaki}, ${body.jumlah_karyawan_perempuan}, ${body.rata_rata_lama_tinggal});
				`;
	return connection.queryPromise(query);
};

const getLaporansById = (id) => {
	const query = `SELECT * FROM laporan_hotels JOIN users ON laporan_hotels.id_hotel = users.id_user WHERE laporan_hotels.id_laporan = ${id}`;
	return connection.queryPromise(query);
};

const updateLaporans = (body) => {
	const query = `
					UPDATE 
						laporan_hotels 
					SET 
						id_hotel = ${body.id_hotel},
						tanggal_laporan = ${body.tanggal_laporan},
						klasifikasi_hotel = ${body.klasifikasi_hotel},
						jumlah_kamar_dimiliki = ${body.jumlah_kamar_dimiliki},
						jumlah_kamar_terjual = ${body.jumlah_kamar_terjual},
						jumlah_wisatawan_lokal = ${body.jumlah_wisatawan_lokal},
						jumlah_wisatawan_asia = ${body.jumlah_wisatawan_asia},
						jumlah_wisatawan_afrika = ${body.jumlah_wisatawan_afrika},
						jumlah_wisatawan_amerika_utara = ${body.jumlah_wisatawan_amerika_utara},
						jumlah_wisatawan_amerika_selatan = ${body.jumlah_wisatawan_amerika_selatan},
						jumlah_wisatawan_antartika = ${body.jumlah_wisatawan_antartika},
						jumlah_wisatawan_eropa = ${body.jumlah_wisatawan_eropa},
						jumlah_wisatawan_australia = ${body.jumlah_wisatawan_australia},
						jumlah_karyawan_lakilaki = ${body.jumlah_karyawan_lakilaki},
						jumlah_karyawan_perempuan = ${body.jumlah_karyawan_perempuan},
						rata_rata_lama_tinggal = ${body.rata_rata_lama_tinggal}
					WHERE 
						id_laporan = '${body.id_laporan}'
				`;
	return connection.queryPromise(query);
};

const deleteLaporans = (id) => {
	const query = `DELETE FROM laporan_hotels WHERE id_laporan = ${id}`;
	return connection.queryPromise(query);
};

module.exports = {
	getAllLaporans,
	storeLaporans,
	getLaporansById,
	updateLaporans,
	deleteLaporans
};