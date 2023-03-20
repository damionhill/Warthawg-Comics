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
            <EventInstance linkURL = "http://www.clandestinecomics.com/" name = "Laurel, MD Comic Book Show" date = "Mar 19, 2023 10-3PM" address = "5400 Holiday Drive Frederick, MD Clarion Inn"/>
            <EventInstance linkURL = "http://www.shoffpromotions.com/" name = "Annandale, VA Comic Book Show" date = "Mar 26, 2023 10-3PM" address = "7128 Columbia Pike Annandale, VA 22003"/>
          


    </div>

    </>



 );
 }export default Events;