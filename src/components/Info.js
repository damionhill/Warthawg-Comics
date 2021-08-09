import React from 'react';
import './Info.css';
export const Info = ({
    header,
    paragraph

}) => {

    return (

        <div className = "info-wrapper">

            <h2 className = "info-header">
                {header}
            </h2>

            <p className = "info-paragraph">
                {paragraph}
            </p>

        </div>


    )

};
