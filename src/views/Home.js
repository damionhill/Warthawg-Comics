import React from 'react';
import { Info } from '../components/Info.js';
import ImageSlider from '../components/ImageSlider.js';
import '../App.css'
import { SliderData } from '../components/SliderData';
import HomeGallery from '../components/HomeGallery';


function Home()
{
 return(

    <>

    <div className="text-wrapper">

        <Info header = "Home" paragraph = "Welcome to Warthawg Comics! I specialize in vintage comics, comic magazines, and books. 
                        I have collected, bought, sold, and traded comics and books for over 40 years.  I can offer 
                        you a variety of vintage comics, both raw and graded, across all genres. I bring a deep 
                        knowledge of grading so rest assured that the grade I set is in accordance with industry 
                        standards and shaped by years of buying and selling professionally graded comics.  The entire 
                        inventory is available via mail order so feel free to browse away and return to see what's new!
                        Simply click on the Catalog link to access and then browse the category of your choice." />

        <Info paragraph = 'My catalog is updated every week with new arrivals. I try to maintain the inventory as 
                    accurately as possible so please reach out to me regarding any items in the catalog. Sold 
                    items are deleted as soon as possible.' />

        <Info paragraph = "Enjoy!"/> <br></br>
        

    </div>


    {/*mobile image carousel*/}
    <div class="carousel-wrapper">
        <ImageSlider slides = {SliderData}/>
    </div>

    <div class="gallery-wrapper">
        <HomeGallery slides = {SliderData} />
    </div>


    </>



 );
 
} 


export default Home;