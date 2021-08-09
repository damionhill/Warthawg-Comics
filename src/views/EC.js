import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';
import ECCatalog from '../components/Catalogs/ECCatalog.js';

function EC(){

 return(
    <>
        <Info header = 'EC'  />    
        <ECCatalog/>
    </>

 );

} 


export default EC;