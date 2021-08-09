import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';
import MagazinesCatalog from '../components/Catalogs/MagazinesCatalog.js';


function Magazines(){

 return(
    <>
        <Info header = 'Magazines'  />    
        <MagazinesCatalog/>
    </>

 );

} 


export default Magazines;