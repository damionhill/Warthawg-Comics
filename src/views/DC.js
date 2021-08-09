import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';
import DCCatalog from '../components/Catalogs/DCCatalog.js';


function DC(){

 return(
    <>
        <Info header = 'DC'  /> 
        <DCCatalog/>  

    </>

 );

} 


export default DC;