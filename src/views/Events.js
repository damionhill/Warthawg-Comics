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
        
        <EventInstance linkURL = "http://www.clendestinecomics.com/" name = "Hunt Valley, MD Comic Book Show" date = "Sep 7,2025 10-3PM" address = "Embassy Suites 213 International Circle, Hunt Valley, MD 21030"/>
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Annandale, VA Comic Book Show" date = "Oct 4,2025 10-3PM" address = "7128 Columbia Pike Annandale, VA 22003"/>
        <EventInstance linkURL = "http://www.baltimorecomicconvention.com" name = "Baltimore Comic Convention" date = "Oct 17-19,2025" address = "Baltimore Convention Center"/>
  </div>

    </>



 );
 }export default Events;