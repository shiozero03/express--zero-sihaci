const connection = require('../config/database');

const getAllAdmins = () => {
	const query = 'SELECT * FROM admins';
	return connection.queryPromise(query);
};

const storeAdmins = (body) => {
	const query = `
					INSERT INTO admins (id_admin, nama_admin, username, password)
					VALUES (NULL, '${body.nama_admin}', '${body.username}', '${body.password}')
				`;
	return connection.queryPromise(query);
};

const getAllAdminsById = (id) => {
	const query = `SELECT * FROM admins WHERE id_admin = ${id}`;
	return connection.queryPromise(query);
};

const updateAdmins = (body) => {
	const query = `UPDATE admins SET
						nama_admin = '${body.nama_admin}',
						username = '${body.username}',
						password = '${body.password}'
					WHERE
						admins.id_admin = '${body.id_admin}'
				`;
	return connection.queryPromise(query);
};

const deleteAdmins = (id) => {
	const query = `
					DELETE FROM admins WHERE admins.id_admin = '${id}'
				`;
	return connection.queryPromise(query);
};

const loginAdmins = (body) => {
	const query = `
					SELECT * FROM admins WHERE username = '${body.username}'
				`;
	return connection.queryPromise(query);
};

module.exports = {
	getAllAdmins,
	storeAdmins,
	getAllAdminsById,
	updateAdmins,
	deleteAdmins,
	loginAdmins
};