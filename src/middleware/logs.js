const logRequest = (req, res, next) => {
	console.log(`Terjadi request ke PATH ${process.env.SERVER}${req.path}`);
	next();
}

module.exports = logRequest;