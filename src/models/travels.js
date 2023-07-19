const connection = require('../config/database');

const getAllTravels = (body) => {
	if(body.limit == 0){
		const query = `SELECT * FROM travels`;
		return connection.queryPromise(query);
	} else {
		const query = `SELECT * FROM travels LIMIT ${body.limit} OFFSET ${body.offset}`;
		return connection.queryPromise(query);
	}
};

const storeTravels = (body) => {
	const query = `
					INSERT INTO travels 
						(id_travel, nama_travel, jam_buka, jam_tutup, trip_dan_harga, alamat_travel, nomor_telepon_travel, banner_travel, image_travel, deskripsi_travel, link_gmaps, link_website, link_instagram, link_facebook, link_twitter) 
					VALUES 
						(NULL, '${body.nama_travel}', '${body.jam_buka}', '${body.jam_tutup}', '${body.trip_dan_harga}', '${body.alamat_travel}', '${body.nomor_telepon_travel}', '${body.banner_travel}', '${body.image_travel}', '${body.deskripsi_travel}', '${body.link_gmaps}', '${body.link_website}', '${body.link_instagram}', '${body.link_facebook}', '${body.link_twitter}');
				`;
	return connection.queryPromise(query);
};

const gettravelsById = (id) => {
	const query = `SELECT * FROM travels WHERE id_travel = ${id}`;
	return connection.queryPromise(query);
};

const updateTravels = (body) => {
	const query = `
					UPDATE 
						travels 
					SET 
						nama_travel = '${body.nama_travel}',
						jam_buka = '${body.jam_buka}',
						jam_tutup = '${body.jam_tutup}',
						trip_dan_harga = '${body.trip_dan_harga}',
						alamat_travel = '${body.alamat_travel}',
						nomor_telepon_travel = '${body.nomor_telepon_travel}',
						banner_travel = '${body.banner_travel}',
						image_travel = '${body.image_travel}',
						deskripsi_travel = '${body.deskripsi_travel}',
						link_gmaps = '${body.link_gmaps}',
						link_website = '${body.link_website}',
						link_instagram = '${body.link_instagram}',
						link_facebook = '${body.link_facebook}',
						link_twitter = '${body.link_twitter}',
					WHERE 
						id_travel = '${body.id_travel}'
				`;
	return connection.queryPromise(query);
};

const deletetravels = (id) => {
	const query = `DELETE FROM travels WHERE id_travel = ${id}`;
	return connection.queryPromise(query);
};

module.exports = {
	getAllTravels,
	storeTravels,
	gettravelsById,
	updateTravels,
	deletetravels
};