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
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Annandale, VA Comic Book Show" date = "Feb 25,2024 10-3PM" address = "7128 Columbia Pike Annandale, VA 22003"/>
        <EventInstance linkURL = "http://www.warthawgcomics.com/" name = "Roanoke Valley Comic Con, VA Comic Book Show" date = "Mar 23,2024 10-3PM" address = "Tanglewood Mall, Roanoke, VA 22003"/>
        <EventInstance linkURL = "http://www.clandestinecomics.com/" name = "Frederick, MD Comic Show" date = "Mar 24, 2024 10-3PM" address = "Clarion Inn 5400 Holiday Drive Frederick, MD"/>



    </div>

    </>



 );
 }export default Events;