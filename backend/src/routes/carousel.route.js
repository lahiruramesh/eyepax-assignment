const express = require('express');

const CarouselController = require('../controllers/carousel.controller');
 
const carsouselRouter = express.Router();

carsouselRouter.get('/s', CarouselController.insertCarousel);
carsouselRouter.get('/',CarouselController.getCarousel);

module.exports = carsouselRouter;