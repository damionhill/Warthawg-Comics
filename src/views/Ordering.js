import React from 'react';
import { Info } from '../components/Info.js';
 



function Ordering()
{
 return(

    <>


    <div className="text-wrapper">

        <Info header = "How To Order" paragraph = "To order, please fill out the contact form located on the &quot;Contact&quot; page. Please indicate the title, issue number and grade
                    of the items that interest you in the message section, as well as filling out your personal information. In the event of multiple inquiries for the same item, I 
                    will use the first message received. Postage and shipping are extra and are computed depending
                    on the size and value of the order."  />

        <Info header = "" paragraph = "When I receive an order, I will set your items aside and notify you of the total due 
                    including postage costs. Payment should be received within a maximum of 7 days 
                    from that notification. If payment is not received within this time, the items will no 
                    longer be reserved for you."/>
        <Info header = "" paragraph = "I am also more than happy to bring any items to a show for viewing.  Please let me
                    know at least two days prior so I can include it with my inventory. The full list of my shows and events I will be at can be found on the &quot;Events&quot; page."/>

 
        

    </div>

    </>



 );
 
} 


export default Ordering;