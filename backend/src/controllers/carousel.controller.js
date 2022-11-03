const Carousel = require("../models/carousel.model");

class CarouselController {

    static insertCarousel = async() => {

        const carousel = await Carousel.findOne();
        
        if(carousel === null) {
            const inserted = await Carousel.insertMany([
                {
                    'image': "https://www.w3schools.com/howto/img_nature_wide.jpg",
                    'title': "Title 01",
                    'subTitle': "Sub title 01"
                },
                {
                    'image': "https://www.w3schools.com/howto/img_snow_wide.jpg",
                    'title': "Title 02",
                    'subTitle': "Sub title 02"
                },
                {
                    'image': "https://www.w3schools.com/howto/img_lights_wide.jpg",
                    'title': "Title 03",
                    'subTitle': "Sub title 03"
                }       
    
            ]);
        }
    }
    
    static getCarousel = async (req, res) => {
        try{
            const {size = 10} = req.query;
            const carousel =  await Carousel.find().limit(size);
            return res.status(200).json(carousel);
            
        }catch(err) {
            return res.status(500).send(err);
        }
    };
}




module.exports = CarouselController;
