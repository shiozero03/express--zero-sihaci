const connection = require('../config/database');

const getAllKuliners = (body) => {
	if(body.limit == 0){
		const query = `SELECT * FROM kuliners`;
		return connection.queryPromise(query);
	} else {
		const query = `SELECT * FROM kuliners LIMIT ${body.limit} OFFSET ${body.offset}`;
		return connection.queryPromise(query);
	}
};

const storeKuliners = (body) => {
	const query = `
					INSERT INTO kuliners 
						(id_kuliner, nama_kuliner, alamat_kuliner, banner_kuliner, image_kuliner, deskripsi_kuliner, link_gmaps, link_instagram, link_shopee, link_tokopedia) 
					VALUES 
						(NULL, '${body.nama_kuliner}', '${body.alamat_kuliner}', '${body.banner_kuliner}', '${body.image_kuliner}', '${body.deskripsi_kuliner}', '${body.link_gmaps}', '${body.link_instagram}', '${body.link_shopee}', '${body.link_tokopedia}');
				`;
	return connection.queryPromise(query);
};

const getKulinersById = (id) => {
	const query = `SELECT * FROM kuliners WHERE id_kuliner = ${id}`;
	return connection.queryPromise(query);
};

const updateKuliners = (body) => {
	const query = `
					UPDATE 
						kuliners 
					SET 
						nama_kuliner = '${body.nama_kuliner}', 
						alamat_kuliner = '${body.alamat_kuliner}', 
						banner_kuliner = '${body.banner_kuliner}', 
						image_kuliner = '${body.image_kuliner}', 
						deskripsi_kuliner = '${body.deskripsi_kuliner}', 
						link_gmaps = '${body.link_gmaps}', 
						link_instagram = '${body.link_instagram}', 
						link_shopee = '${body.link_shopee}', 
						link_tokopedia = '${body.link_tokopedia}'
					WHERE 
						id_kuliner = '${body.id_kuliner}'
				`;
	return connection.queryPromise(query);
};

const deleteKuliners = (id) => {
	const query = `DELETE FROM kuliners WHERE id_kuliner = ${id}`;
	return connection.queryPromise(query);
};

module.exports = {
	getAllKuliners,
	storeKuliners,
	getKulinersById,
	updateKuliners,
	deleteKuliners
};