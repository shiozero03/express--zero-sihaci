require('dotenv').config()
const express = require('express');
const app = express();
const server = process.env.SERVER;
const path = require('path');

app.set('view engine', 'ejs');

const middlewareLogRequest = require('./src/middleware/logs');
app.use(middlewareLogRequest);
app.use(express.json());

// Get Routes
const adminRoutes = require('./src/routes/admins');
const hotelRoutes = require('./src/routes/hotels');

// Set Routes+
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/hotel', hotelRoutes);

// Route API
app.get('/', (req, res) => {
	const data = {
		server: `${server}`
	}
	const indexPath = path.join(__dirname, 'src/views', 'index.ejs');
  	res.render(indexPath, { data });
});


// Set Listen
app.listen(3000, () => {
  console.log(`Server running on ${server}`);
});
