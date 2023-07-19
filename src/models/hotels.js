const connection = require('../config/database');

const getAllHotels = () => {
	const query = `SELECT * FROM users WHERE role_user = 'Hotel'`;
	return connection.queryPromise(query);
};

const storeHotels = (body) => {
	const query = `
					INSERT INTO users (id_user, nama_user, username, password, role_user)
					VALUES (NULL, '${body.nama_hotel}', '${body.username}', '${body.password}', 'Hotel')
				`;
	return connection.queryPromise(query);
};

const getAllHotelsById = (id) => {
	const query = `SELECT * FROM users WHERE id_user = ${id}`;
	return connection.queryPromise(query);
};

const updateHotels = (body) => {
	const query = `UPDATE users SET
						nama_user = '${body.nama_hotel}',
						username = '${body.username}',
						password = '${body.password}'
					WHERE
						users.id_user = '${body.id_hotel}'
				`;
	return connection.queryPromise(query);
};

const deleteHotels = (id) => {
	const query = `
					DELETE FROM users WHERE users.id_hotel = '${id}'
				`;
	return connection.queryPromise(query);
};

module.exports = {
	getAllHotels,
	storeHotels,
	getAllHotelsById,
	updateHotels,
	deleteHotels
};