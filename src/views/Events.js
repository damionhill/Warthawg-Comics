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
        <EventInstance linkURL = "https://www.shoffpromotions.com/" name = "Annandale, VA Comic Show" date = "Mar 27, 2022 10AM-3PM" address = "7128 Columbia Pike 22003"/>
        <EventInstance linkURL = "https://www.untamedworlds.com/" name = "Roanoke, VA Comic Show" date = "Apr 2, 2022 10AM-4PM" address = "Tanglewood Mall 24018"/>
        <EventInstance linkURL = "https://www.clandestinecomics.com/" name = "Hunt Valley, MD Comic Show" date = "Apr 3, 2022 10AM-3PM" address = "245 Shawan Road 21031"/>


    </div>

    </>



 );
 }export default Events;