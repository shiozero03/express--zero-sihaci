const connection = require('../config/database');

const getAllWisata = (body) => {
	if(body.limit == 0){
		const query = `SELECT * FROM objek_wisatas`;
		return connection.queryPromise(query);
	} else {
		const query = `SELECT * FROM objek_wisatas LIMIT ${body.limit} OFFSET ${body.offset}`;
		return connection.queryPromise(query);
	}
};

const storeWisatas = (body) => {
	const query = `
					INSERT INTO objek_wisatas
						(id_wisata, nama_wisata, kategori_wisata, jam_buka_hari_kerja, jam_tutup_hari_kerja, jam_buka_weekend, jam_tutup_weekend, harga_tiket_hari_kerja, harga_tiket_weekend, alamat_wisata, banner_wisata, image_wisata, deskripsi_wisata, link_gmaps, link_website, link_instagram, link_facebook, link_youtube, link_twitter)
					VALUES 
						(NULL, ${body.nama_wisata}, ${body.kategori_wisata}, ${body.jam_buka_hari_kerja}, ${body.jam_tutup_hari_kerja}, ${body.jam_buka_weekend}, ${body.jam_tutup_weekend}, ${body.harga_tiket_hari_kerja}, ${body.harga_tiket_weekend}, ${body.alamat_wisata}, ${body.banner_wisata}, ${body.image_wisata}, ${body.deskripsi_wisata}, ${body.link_gmaps}, ${body.link_website}, ${body.link_instagram}, ${body.link_facebook}, ${body.link_youtube}, ${body.link_twitter});
				`;
	return connection.queryPromise(query);
};

const getwisatasById = (id) => {
	const query = `SELECT * FROM objek_wisatas WHERE id_wisata = ${id}`;
	return connection.queryPromise(query);
};

const updateWisatas = (body) => {
	const query = `
					UPDATE 
						objek_wisatas 
					SET 
						nama_wisata = '${body.nama_wisata}',
						kategori_wisata = '${body.kategori_wisata}',
						jam_buka_hari_kerja = '${body.jam_buka_hari_kerja}',
						jam_tutup_hari_kerja = '${body.jam_tutup_hari_kerja}',
						jam_buka_weekend = '${body.jam_buka_weekend}',
						jam_tutup_weekend = '${body.jam_tutup_weekend}',
						harga_tiket_hari_kerja = '${body.harga_tiket_hari_kerja}',
						harga_tiket_weekend = '${body.harga_tiket_weekend}',
						alamat_wisata = '${body.alamat_wisata}',
						banner_wisata = '${body.banner_wisata}',
						image_wisata = '${body.image_wisata}',
						deskripsi_wisata = '${body.deskripsi_wisata}',
						link_gmaps = '${body.link_gmaps}',
						link_website = '${body.link_website}',
						link_instagram = '${body.link_instagram}',
						link_facebook = '${body.link_facebook}',
						link_youtube = '${body.link_youtube}',
						link_twitter = '${body.link_twitter}'
					WHERE 
						id_wisata = '${body.id_wisata}'
				`;
	return connection.queryPromise(query);
};

const deletewisatas = (id) => {
	const query = `DELETE FROM objek_wisatas WHERE id_wisata = ${id}`;
	return connection.queryPromise(query);
};

module.exports = {
	getAllWisata,
	storeWisatas,
	getwisatasById,
	updateWisatas,
	deletewisatas
};