const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

const port = process.env.PORT ? process.env.PORT : 3000;

const {getDBConnect} = require('./configs/db.config');

const carsouselRouter = require('./routes/carousel.route');

app.use('/api/carosuel', carsouselRouter);

app.get('/', (req, res) => {
    res.send('Carosoul API');
});

app.listen(port , () => {
    console.log(process.env.PORT);
    console.log(`API started : ${port}`);
    getDBConnect();
});