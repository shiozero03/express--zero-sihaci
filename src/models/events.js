const connection = require('../config/database');

const getAllEvents = (body) => {
	if(body.limit == 0){
		const query = `SELECT * FROM events`;
		return connection.queryPromise(query);
	} else {
		const query = `SELECT * FROM events LIMIT ${body.limit} OFFSET ${body.offset}`;
		return connection.queryPromise(query);
	}
};

const storeEvents = (body) => {
	const query = `
					INSERT INTO events (id_event, nama_event, banner_event, image_event, deskripsi_event)
					VALUES (NULL, '${body.nama_event}', '${body.banner_event}', '${body.image_event}', '${body.deskripsi_event}')
				`;
	return connection.queryPromise(query);
};

const geteventById = (id) => {
	const query = `SELECT * FROM events WHERE id_event = ${id}`;
	return connection.queryPromise(query);
};

const updateEvents = (body) => {
	const query = `
					UPDATE 
						events 
					SET 
						nama_event = '${body.nama_event}', 
						banner_event = '${body.banner_event}', 
						image_event = '${body.image_event}', 
						deskripsi_event = '${body.deskripsi_event}'
					WHERE 
						id_event = '${body.id_event}'
				`;
	return connection.queryPromise(query);
};

const deleteevents = (id) => {
	const query = `DELETE FROM events WHERE id_event = ${id}`;
	return connection.queryPromise(query);
};

module.exports = {
	getAllEvents,
	storeEvents,
	geteventById,
	updateEvents,
	deleteevents
};