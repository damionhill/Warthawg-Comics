import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';
import Misc4059Catalog from '../components/Catalogs/Misc1940-59Catalog.js';


function Misc4059(){

 return(
    <>
        <Info header = 'Misc.  1940-59'  />    
        <Misc4059Catalog/>
    </>

 );

} 


export default Misc4059;