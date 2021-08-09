import React, { useState } from 'react';
import './EventInstance.css';


const EventInstance = ({linkURL, name, date, address}) => {

    return(
            <div className="event-wrapper">
                <a className = "event-link" href={linkURL} target = "_blank" className = "event-item">{name}</a> <br></br>
                <p className = "event-info">{date}</p>
                <p className="event-info">{address}</p>
            </div>

    );

}

export default EventInstance;