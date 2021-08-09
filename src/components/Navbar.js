import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import './Navbar.css';
import WHLogo from "../Logo Images/bobman426-KHC13_1A.png"
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>

            <nav className="navbar">

                <div className="navbar-container">

                    <Link to = "/"><img className = "web-logo" src={WHLogo} alt="warthawg comics logo" ></img></Link>

                    <Link to = "/" className  = "nav-logo"> 
                        Warthawg Comics
                    </Link>

                    <div class="menu-icon" onClick = {handleClick}>
                        {/* <i className = {click ? 'fa fa-times' : 'fa fa-bars'} /> */}
                        <FaBars className = {click ? 'bars-inactive' : 'bars-active'}/>
                        <FaTimes className = {click ? 'times-active' : 'times-inactive'}/>
                    </div>

                    {/* Navigation Pages*/}
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>

                        <li class="nav-item">
                            <Link to = '/' className = "nav-links" onClick = {closeMobileMenu}> HOME </Link>
                        </li>

                        <li class="nav-item">
                            <Link to = '/Catalog' className = "nav-links" onClick = {closeMobileMenu}> CATALOG </Link>
                        </li>

                        <li class="nav-item">
                            <Link to = '/Contact' className = "nav-links" onClick = {closeMobileMenu}> CONTACT </Link>
                        </li>

                        <li class="nav-item">
                            <Link to = '/Events' className = "nav-links" onClick = {closeMobileMenu}> EVENTS </Link>
                        </li>

                        <li class="nav-item">
                            <Link to = '/Ordering' className = "nav-links" onClick = {closeMobileMenu}> ORDERING </Link>
                        </li>

                        <li class="nav-item">
                            <Link to = '/I-Buy-Comics' className = "nav-links" onClick = {closeMobileMenu}> SELLING </Link>
                        </li>
         
                    </ul>


                </div>
            </nav>

        </>



    )
}

export default Navbar