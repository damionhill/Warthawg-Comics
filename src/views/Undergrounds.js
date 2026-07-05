import React from 'react';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';
import UndergroundsCatalog from '../components/Catalogs/UndergroundsCatalog.js';


function Undergrounds(){

 return(
    <>
        <Info header = 'Undergrounds'  />   
        <UndergroundsCatalog/> 
    </>

 );

} 


export default Undergrounds;