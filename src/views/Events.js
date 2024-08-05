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
        <EventInstance linkURL = "http://www.lehighvalleycomicconvention.com/" name = "Lehigh Valley Comic Convention" date = "Aug 10,2024 10-3PM" address = "4525 Education Park Dr. Schnecksville, PA"/>
        <EventInstance linkURL = "http://www.salemciviccenter.com/" name = "Salem, VA Vintage Comic Book Show" date = "Aug 24,2024 10-3PM" address = "Salem Civic Center 1001 Roanoke Blvd Salem, VA 24153 22003"/>
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Annandale, VA Comic Book Show" date = "Aug 25,2024 10-3PM" address = "7128 Columbia Pike Annandale, VA 22003"/>
        <EventInstance linkURL = "http://www.baltimorecomiccon.com/" name = "Baltimore Comic Convention" date = "Sep 20-22,2024" address = "Baltimore Convention Center"/>
  </div>

    </>



 );
 }export default Events;