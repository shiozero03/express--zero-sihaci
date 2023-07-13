require('dotenv').config()
const express = require('express');
const app = express();
const server = process.env.SERVER;
const path = require('path');
const fileUpload = require('express-fileupload');
const cors = require('cors');

app.set('view engine', 'ejs');

app.use(cors());
app.use(fileUpload());

const publicPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicPath));

const middlewareLogRequest = require('./src/middleware/logs');
app.use(middlewareLogRequest);
app.use(express.json());

// Get Routes
const adminRoutes = require('./src/routes/admins');
const hotelRoutes = require('./src/routes/hotels');
const eventRoutes = require('./src/routes/events');
const kulinerRoutes = require('./src/routes/kuliners');
const travelRoutes = require('./src/routes/travels');
const wisataRoutes = require('./src/routes/wisatas');
const laporanRoutes = require('./src/routes/laporans');
const akomodasiRoutes = require('./src/routes/akomodasis');

// Set Routes+
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/hotel', hotelRoutes);
app.use('/api/v1/event', eventRoutes);
app.use('/api/v1/kuliner', kulinerRoutes);
app.use('/api/v1/travel', travelRoutes);
app.use('/api/v1/wisata', wisataRoutes);
app.use('/api/v1/laporan', laporanRoutes);
app.use('/api/v1/akomodasi', akomodasiRoutes);

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
