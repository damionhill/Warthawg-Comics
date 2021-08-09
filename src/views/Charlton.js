import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';
import CharltonCatalog from '../components/Catalogs/CharltonCatalog.js';



function Charlton(){

 return(
    <>
        <Info header = 'Charlton'  /> 
        <CharltonCatalog/>

    </>

 );

} 


export default Charlton;