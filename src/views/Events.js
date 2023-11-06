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
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Frederick, MD Comic Book Show" date = "Nov 19,2023 10-3PM" address = "Clarion Inn 5400 Holiday Dr Frederick, MD 21703"/>
        <EventInstance linkURL = "http://www.clandestinecomics.com/" name = "Laurel, MD Comic Show" date = "Dec 3, 2023 10-3PM" address = "Double Tree Hotel 15101 Sweltzer Ln Laurel, MD"/>



    </div>

    </>



 );
 }export default Events;