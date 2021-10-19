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
        
        <EventInstance linkURL = "https://baltimorecomiccon.com/" name = "Baltimore Comic Con" date = "Oct 22-24, 2021" address = "Baltimore Convention Center"/>
        <EventInstance linkURL = "https://www.shoffpromotions.com/" name = "Frederick, MD Comic Show" date = "Nov 21, 2021 10AM-3PM" address = "5400 Holiday Drive Frederick, MD 21073"/>


    </div>

    </>



 );

}


export default Events;