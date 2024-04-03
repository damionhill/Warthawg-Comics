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
        <EventInstance linkURL = "http://www.clandestinecomics.com/" name = "Hunt Valley, MD Comic Book Show" date = "Apr 14,2024 10-3PM" address = "213 International Circle, Hunt Valley, MD 21030"/>
        <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Annandale, VA Comic Book Show" date = "Apr 28,2024 10-3PM" address = "7128 Columbia Pike Annandale, VA 22003"/>
        <EventInstance linkURL = "http://www.warthawgcomics.com/" name = "Roanoke Valley Comic Con, VA Comic Book Show" date = "May 4,2024 10-3PM" address = "Tanglewood Mall, Roanoke, VA 22003"/>
        <EventInstance linkURL = "http://www.warthawgcomics.com/" name = "Comic Logic Ashburn, VA Comic Book Show" date = "May 19,2024 12-4PM" address = "44031 Ashburn Shopping Plz #281 Ashburn, VA 20147"/>



    </div>

    </>



 );
 }export default Events;