const connection = require('../config/database');

const loginUsers = (body) => {
	const query = `
					SELECT * FROM users WHERE username = '${body.username}'
				`;
	return connection.queryPromise(query);
};

module.exports = {
	loginUsers
};