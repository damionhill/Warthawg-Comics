import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Info } from '../components/Info.js';
import TopPageBtn from '../components/TopPageBtn.js';
import '../App.css';


function BooksTPBs(){

 return(
    <>
        <Info header = 'Books-TPBs'  />    
    </>

 );

} 


export default BooksTPBs;