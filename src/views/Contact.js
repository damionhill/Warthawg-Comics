import React from 'react';
import { Info } from '../components/Info.js'; 
import ContactForm from '../components/ContactForm.js';

function Contact()
{
 return(

    <>


    <div className="text-wrapper">

        <Info header = "Contact" paragraph = "You can reach me by filling out the form below."  />
        <Info header = "" paragraph = "For information about the ordering process, please see the &quot;Ordering&quot; page."/>
        <Info header = "" paragraph = "If you would like to be added to my email list, please type in your information with &quot;Email List&quot; in the message section."/>
        <ContactForm/>

    
        

    </div>

    </>



 );
 
} 


export default Contact;