import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';
import MarvelCatalog from '../components/Catalogs/MarvelCatalog.js';


function Marvel(){

 return(
    <>
        <Info header = 'Marvel'  />  
        <MarvelCatalog/>  
    </>

 );

} 


export default Marvel;