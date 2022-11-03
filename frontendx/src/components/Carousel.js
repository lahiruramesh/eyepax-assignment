import React, {useEffect, useState} from 'react';
import './Carousel.css';
import { CarosuelItem } from './CarouselItem';
import img1 from '../images/img_lights_wide.jpeg';
import img2 from '../images/img_nature_wide.jpeg';
import img3 from '../images/img_snow_wide.jpeg';

export default function Carousel({size , infinite}) {

    const [items, setItem] = useState([]);

    const [activeItem, setActiveItem] = useState(0);
    

    const fetchCarousels = () => {
        try{
            fetch(`http://localhost:3600/api/carosuel?size=${size}`).then(res => res.json())
            .then(res => setItem(res)).catch(err => console.log(err));
        }catch(err){
            console.log('fetchCarousels', err);
        }
    }

    useEffect( () => {
        if(items.length === 0) fetchCarousels();
        if(infinite) {
           setTimeout(() => {
            activeItem + 1 < items.length ? setActiveItem(activeItem + 1): setActiveItem(0);
           },3000)
        }

    }, [activeItem])

    /**
     * 
     * @param string buttonType 
     */
    const onClickHandler = (buttonType) => {

        let totalCarousel = items.length;
        let activeCarouselItem = activeItem;

        if(buttonType == 'next') setActiveItem(activeCarouselItem + 1 < totalCarousel ? activeCarouselItem + 1 : activeCarouselItem);
      
        if(buttonType == 'back') setActiveItem(activeCarouselItem - 1 >= 0 ? activeCarouselItem -1 : activeCarouselItem);
    }

    return (
    <>
        <div className='slideshow-container'>
            {items.map((item, index) => {
                return <CarosuelItem key={index} img={item.image} title={item.title} subTitle={item.subTitle} active={index === activeItem ? true : false} />
            })}
            <a className="prev" onClick={() => onClickHandler('back')}>&#10094;</a>
            <a className="next" onClick={ () => onClickHandler('next')}>&#10095;</a>
        </div>
    </>
    )
}