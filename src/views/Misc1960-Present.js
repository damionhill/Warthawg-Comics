import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';
import Misc60PresCatalog from '../components/Catalogs/Misc1960-PresentCatalog.js';


function Misc60P(){

 return(
    <>
        <Info header = 'Misc. 1960-Present'  />   
        <Misc60PresCatalog/> 
    </>

 );

} 


export default Misc60P;