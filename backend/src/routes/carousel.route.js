const express = require('express');

const CarouselController = require('../controllers/carousel.controller');
 
const carsouselRouter = express.Router();

carsouselRouter.post('/', CarouselController.insertCarousel);
carsouselRouter.get('/',CarouselController.getCarousel);

module.exports = carsouselRouter;