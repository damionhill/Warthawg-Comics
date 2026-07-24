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
        <EventInstance linkURL = "https://philadelphiacomic-con.com/" name = "Philadelphia, PA, Comic Book Show" date = "Aug 16,2026 10-3PM" address = "Clarion Hotel 76 Industrial Hwy 19029"/>
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Salem, VA Comic Book Show" date = "Aug 22,2026 10-3PM" address = "Salem Virginia Convention Center"/>
        <EventInstance linkURL = "https://baltimorecomiccon.com" name = "Baltimore Comic Convention" date = "Sep 25-27, 2026" address = "Baltimore Convention Center Booth 905"/>
  </div>

    </>



 );
 }export default Events;