import React, {useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './HomeGallery.css'

const HomeGallery = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;


    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }


    return (
        <section className = "gallery">
            {SliderData.map((slide) => {
                return (
                    <div >
                        {(<img className = "gallery-image" src = {slide.image} alt = "comic image" />)}

                    </div> 
            )})}

        </section>

       
    );
};

export default HomeGallery

