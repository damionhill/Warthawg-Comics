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
        <EventInstance linkURL = "http://www.philadelphiacomic-con.com/" name = "Philadelphia Comic Show" date = "Aug 15, 2021 10AM-4PM" address = "Clarion Hotel Philadelphia Intl Airport, Philadelphia, PA"/>





    </div>

    </>



 );

}


export default Events;