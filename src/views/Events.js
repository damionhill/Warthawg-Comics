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
        <EventInstance linkURL = "https://www.shoffpromotions.com/" name = "Annandale, VA Comic Show" date = "May 21, 2022 10AM-3PM" address = "7128 Columbia Pike 22003"/>
        <EventInstance linkURL = "https://www.clandestinecomics.com/" name = "Comic Logic" date = "May 22, 2022 12-4PM" address = "44031 Ashburn Shopping Plaza #281 Ashburn, VA 20147"/>


    </div>

    </>



 );
 }export default Events;