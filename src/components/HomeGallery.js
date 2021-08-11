import React, {useState} from 'react';
import { SliderData } from '../Data/SliderData';
import './HomeGallery.css'

const HomeGallery = ({slides}) => {
    const length = slides.length;


    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }


    return (
        <section className = "gallery">
            {slides.map((slide) => {
                return (
                    <div >
                        {(<img className = "gallery-image" src = {slide.image} alt = "comic image" />)}

                    </div> 
            )})}

        </section>

       
    );
};

export default HomeGallery

