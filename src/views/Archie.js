import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';
import ArchieCatalog from '../components/Catalogs/ArchieCatalog.js';


function Archie(){

 return(
    <>
        <Info header = 'Archie'  />    
        <ArchieCatalog/>
    </>

 );

} 


export default Archie;