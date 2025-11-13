import React from 'react';
import EventInstance from '../components/EventInstance.js';
import { Info } from '../components/Info.js';



function Events()
{
 return(

    <>


    <div className="text-wrapper">

        <Info header = "Events" paragraph = ""  />

        {/*DAD! Add events below this line by copying the format. */}
        {/* <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Comic Logic Comic Show" date = "Jul 11, 2021 12-5PM" address = "44031 Ashburn Plaza Shopping Center #281 Ashburn, VA 20147"/> */}
        
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Frederick, MD, Comic Book Show" date = "Nov 16,2025 10-3PM" address = "5400 Holiday Drive Frederick, MD 21703"/>
        <EventInstance linkURL = "http://www.lehighvalleycomicconvention.com" name = "Lehigh Valley Comic Con " date = "Dec 6,2025" address = "LCCC 4525 Education Park Dr Schnecksville, PA"/>
        <EventInstance linkURL = "http://www.clandestinecomics.com" name = "Laurel MD Comic Show " date = "Dec 7,2025" address = "Double Tree Hotel 15101 Sweitzer Lane Laurel, MD"/>
  </div>

    </>



 );
 }export default Events;