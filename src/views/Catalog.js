import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GenreList from '../components/GenreList.js';
import { Info } from '../components/Info.js';
import Archie from './Archie.js';
import BooksTPBs from './Books-TPBs.js';
import Charlton from './Charlton.js';
import DC from './DC.js';
import Dell from './Dell.js';
import EC from './EC.js';
import GKW from './GKW.js';
import Magazines from './Magazines.js';
import Marvel from './Marvel.js';
import Misc4059 from './Misc1940-59';
import Misc60P from './Misc1960-Present';
import Romance from './Romance.js';
import Undergrounds from './Undergrounds.js';

 

function Catalog()
{
 return(

    <>


    <div className="text-wrapper">

    <Info header = "Catalog" paragraph = ""/>

    <GenreList/>

    <Router>
        <Switch>
            <Route path = '/' exact component = {Catalog}/>           
            <Route path = '/Archie' exact component = {Archie}/>
            <Route path = '/Books-TPBs' exact component = {BooksTPBs}/>
            <Route path = '/Charlton' exact component = {Charlton}/>
            <Route path = '/DC' exact component = {DC}/>           
            <Route path = '/Dell' exact component = {Dell}/>           
            <Route path = '/EC' exact component = {EC}/>           
            <Route path = '/GKW' exact component = {GKW}/>           
            <Route path = '/Magazines' exact component = {Magazines}/>           
            <Route path = '/Marvel' exact component = {Marvel}/>
            <Route path = '/Marvel' exact component = {Marvel}/>           
            <Route path = '/Misc1940-59' exact component = {Misc4059}/>           
            <Route path = '/Misc1960-Present' exact component = {Misc60P}/> 
            <Route path = '/Romance' exact component = {Romance}/>           
            <Route path = '/Undergrounds' exact component = {Undergrounds}/>           
        </Switch>
    </Router>

 
    
    </div>

    </>



 );
 
} 


export default Catalog;