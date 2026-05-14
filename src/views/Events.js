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
        
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Annandale, VA, Comic Book Show" date = "Aug 9,2026 10-3PM" address = "7128 Columbia Pike Annandale,VA 22003"/>
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Frederick, MD, Comic Book Show" date = "July 19,2026 10-3PM" address = "5400 Holiday Drive Frederick, MD 21703"/>
        <EventInstance linkURL = "http://www.clandestinecomics.com" name = "Hunt Valley Comic Book Show" date = "June 7, 2026" address = "Doubletree Hotel 15101 Sweitzer Ln Laurel, MD"/>
  </div>

    </>



 );
 }export default Events;