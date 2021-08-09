import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';
import DellCatalog from '../components/Catalogs/DellCatalog.js';


function Dell(){

 return(
    <>
        <Info header = 'Dell'  />    
        <DellCatalog/>
    </>

 );

} 


export default Dell;