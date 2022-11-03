const mongoose = require("mongoose");
const Carousel = mongoose.model('Carousel', { image: String, title: String, subTitle: String });

module.exports = Carousel;