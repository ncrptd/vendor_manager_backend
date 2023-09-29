require('dotenv').config();
const express = require('express');
const app = express();
const initializeDatabase = require('./db/db.connection');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const helmet = require('helmet')
const vendorRouter = require('./src/routes/vendor.routes');
const routeNotFound = require('./src/middlewares/route-not-found.middleware');

app.use(express.json());
initializeDatabase();
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hello, world')
});
app.use('/vendors', vendorRouter);


app.use(routeNotFound);

app.listen(PORT, () => {
    console.log('Server is running in port', PORT)
});
