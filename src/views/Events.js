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
        <EventInstance linkURL = "https://www.shoffpromotions.com/" name = "Annandale, VA Comic Show" date = "Sep 18, 2021 10AM-3PM" address = "7128 Columbia Pike, Annandale, VA"/>
        <EventInstance linkURL = "https://clandestinecomics.com/" name = "Hunt Valley Comic Show" date = "Sep 19, 2021 10AM-3PM" address = "Delta Hotels by Marriott, 245 Shawan Rd Hunt Valley, MD"/>
        <EventInstance linkURL = "https://www.untamedworlds.com/roanoke-valley-comicon" name = "Roanoke Valley Comicon" date = "Oct 3, 2021 10AM-4PM" address = "Tanglewood Mall Roanoke, VA"/>
        <EventInstance linkURL = "https://baltimorecomiccon.com/" name = "Baltimore Comic Con" date = "Oct 22-24, 2021" address = "Baltimore Convention Center"/>


    </div>

    </>



 );

}


export default Events;