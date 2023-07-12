const connection = require('../config/database');

const getAllHotels = () => {
	const query = 'SELECT * FROM hotels';
	return connection.queryPromise(query);
};

const storeHotels = (body) => {
	const query = `
					INSERT INTO hotels (id_hotel, nama_hotel, username, password)
					VALUES (NULL, '${body.nama_hotel}', '${body.username}', '${body.password}')
				`;
	return connection.queryPromise(query);
};

const getAllHotelsById = (id) => {
	const query = `SELECT * FROM hotels WHERE id_hotel = ${id}`;
	return connection.queryPromise(query);
};

const updateHotels = (body) => {
	const query = `UPDATE hotels SET
						nama_hotel = '${body.nama_hotel}',
						username = '${body.username}',
						password = '${body.password}'
					WHERE
						hotels.id_hotel = '${body.id_hotel}'
				`;
	return connection.queryPromise(query);
};

const deleteHotels = (id) => {
	const query = `
					DELETE FROM hotels WHERE hotels.id_hotel = '${id}'
				`;
	return connection.queryPromise(query);
};

const loginHotels = (body) => {
	const query = `
					SELECT * FROM hotels WHERE username = '${body.username}'
				`;
	return connection.queryPromise(query);
};

module.exports = {
	getAllHotels,
	storeHotels,
	getAllHotelsById,
	updateHotels,
	deleteHotels,
	loginHotels
};