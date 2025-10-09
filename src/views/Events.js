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
        
        <EventInstance linkURL = "http://www.warthawgcomics.com/" name = "Comic Logic Lot Con" date = "Sep 7,2025 10-3PM" address = "Comic Logic 44031 Ashburn Shopping Plz Ste 281 Ashburn, VA 20147"/>
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Frederick, MD, Comic Book Show" date = "Nov 16,2025 10-3PM" address = "5400 Holiday Drive Frederick, MD 21703"/>
        <EventInstance linkURL = "http://www.baltimorecomicconvention.com" name = "Baltimore Comic Convention" date = "Oct 17-19,2025" address = "Baltimore Convention Center Booth 904"/>
  </div>

    </>



 );
 }export default Events;