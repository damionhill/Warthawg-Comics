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
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Annandale, VA Comic Book Show" date = "Aug 13, 2023 10-3PM" address = "7128 Columbia Pike Annandale, VA 22003"/>
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Baltimore Comic Book Convention" date = "Sep 8-10" address = "Baltimore Convention Center Baltimore, MD 21703 Clarion Inn"/>
        <EventInstance linkURL = "http://www.clandestinecomics.com/" name = "Hunt Valey, MD Comic Book Show" date = "Oct 22, 2023 10-3PM" address = "245 Shawan Rd Hunt Valley, MD 21031 Delta Hotels By Marriott Hotel"/>



    </div>

    </>



 );
 }export default Events;