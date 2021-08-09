import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';


function Romance(){

 return(
    <>
        <Info header = 'Romance'  />    
    </>

 );

} 


export default Romance;