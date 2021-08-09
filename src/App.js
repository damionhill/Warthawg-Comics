import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home.js';
import Contact from './views/Contact.js'
import Events from './views/Events.js'
import IBuyComics from './views/I-Buy-Comics';
import Ordering from './views/Ordering';
import Catalog from './views/Catalog';
import Archie from './views/Archie';
import Charlton from './views/Charlton';
import BooksTPBs from './views/Books-TPBs';
import DC from './views/DC';
import Dell from './views/Dell';
import EC from './views/EC';
import GKW from './views/GKW';
import Magazines from './views/Magazines';
import Marvel from './views/Marvel';
import Misc4059 from './views/Misc1940-59';
import Misc60P from './views/Misc1960-Present';
import Romance from './views/Romance';
import Undergrounds from './views/Undergrounds';


document.body.style = 'background: rgb(227, 234, 255);;'

function App() {
    return ( 
        <div className="big-wrapper">

            <>
        <Router>
        <Navbar />
        <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path='/Contact' component={Contact} />
            <Route path = '/Catalog' exact component = {Catalog}/>
            <Route path = '/Events' exact component = {Events}/>
            <Route path = '/I-Buy-Comics' exact component = {IBuyComics}/>
            <Route path = '/Ordering' exact component = {Ordering}/> 
            <Route path = '/Archie' exact component = {Archie}/>    
            <Route path = 'Books-TPBs' exact component = {BooksTPBs}/>
            <Route path = '/Charlton' exact component = {Charlton}/>       
            <Route path = '/DC' exact component = {DC}/>
            <Route path = '/Dell' exact component = {Dell}/>
            <Route path = '/EC' exact component = {EC}/>
            <Route path = '/GKW' exact component = {GKW}/>
            <Route path = '/Magazines' exact component = {Magazines}/>
            <Route path = '/Marvel' exact component = {Marvel}/>
            <Route path = '/Misc1940-59' exact component = {Misc4059}/>
            <Route path = '/Misc1960-Present' exact component = {Misc60P}/>
            <Route path = '/Romance' exact component = {Romance}/>
            <Route path = '/Undergrounds' exact component = {Undergrounds}/> 

        </Switch>
        </Router>

        </>

        </div>
    );
}

export default App;