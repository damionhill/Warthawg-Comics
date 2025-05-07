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
        
        <EventInstance linkURL = "http://www.warthawgcomics.com/" name = "Will not Attend Comic Logic Lot Con" date = "May 18,2025 12-4PM" address = "44031 Ashburn Shopping Plz #281 Ashburn, VA 20147"/>
        <EventInstance linkURL = "http://www.clendestinecomics.com/" name = "Laurel, MD Comic Book Show" date = "Jun 1,2025 10-3PM" address = "Double Tree 15101 Sweitzer Ln Laurel, MD"/>
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Annandale, VA Comic Book Show" date = "Jun 8,2025 10-3PM" address = "7128 Columbia Pike Annandale, VA 22003"/>
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Frederick, MD Comic Book Show" date = "Jul 20,2025 10-3PM" address = "5400 Holiday Drive Frederick, MD 21703"/>
  </div>

    </>



 );
 }export default Events;