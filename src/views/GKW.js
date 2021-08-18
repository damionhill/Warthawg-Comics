import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';
import GKWCatalog from '../components/Catalogs/GKWCatalog.js';


function GKW(){

 return(
    <>
        <Info header = 'Gold Key/Whitman'  />   
        <GKWCatalog/> 
    </>

 );

} 


export default GKW;