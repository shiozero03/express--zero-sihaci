const connection = require('../config/database');

const getAllAdmins = () => {
	const query = `SELECT * FROM users WHERE role_user = 'Admin'`;
	return connection.queryPromise(query);
};

const storeAdmins = (body) => {
	const query = `
					INSERT INTO users (id_user, nama_user, username, password, role_user)
					VALUES (NULL, '${body.nama_admin}', '${body.username}', '${body.password}', 'Admin')
				`;
	return connection.queryPromise(query);
};

const getAllAdminsById = (id) => {
	const query = `SELECT * FROM users WHERE id_user = ${id}`;
	return connection.queryPromise(query);
};

const updateAdmins = (body) => {
	const query = `UPDATE users SET
						nama_user = '${body.nama_admin}',
						username = '${body.username}',
						password = '${body.password}'
					WHERE
						users.id_user = '${body.id_admin}'
				`;
	return connection.queryPromise(query);
};

const deleteAdmins = (id) => {
	const query = `
					DELETE FROM users WHERE users.id_user = '${id}'
				`;
	return connection.queryPromise(query);
};

module.exports = {
	getAllAdmins,
	storeAdmins,
	getAllAdminsById,
	updateAdmins,
	deleteAdmins
};