import React from 'react';
import './GenreList.css';
import { FaArchive } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export const GenreList = () => {

    return(
        <>
            <ul className="list-wrapper">
                <li className="genre-item"> 
                    <Link to = '/Archie' className="genre-links">ARCHIE</Link>
                </li>

                <li className="genre-item">
                    <Link to = '/Books' className="genre-links">  BOOKS/TPB </Link>
                </li>

                <li className="genre-item">
                    <Link to = '/Charlton' className="genre-links">  CHARLTON </Link>
                </li>

                <li className="genre-item">
                    <Link to = '/DC' className="genre-links">  DC </Link>
                </li>

                <li className="genre-item">
                    <Link to = '/Dell' className="genre-links">  DELL </Link>
                </li>
                <li className="genre-item">
                    <Link to = '/EC' className="genre-links">  EC </Link>
                </li>

                <li className="genre-item">
                    <Link to = '/GKW' className="genre-links"> GOLD KEY/WHITMAN </Link>
                </li>

                <li className="genre-item">
                    <Link to = '/Magazines' className="genre-links">  MAGAZINES </Link>
                </li>

                <li className="genre-item">
                    <Link to = '/Marvel' className="genre-links">  MARVEL </Link>
                </li>

                <li className="genre-item">
                    <Link to = '/Misc1940-59' className="genre-links">  MISC. 1940-1959 </Link>
                </li>

                <li className="genre-item">
                    <Link to = '/Misc1960-Present' className="genre-links">  MICS. 1960-PRESENT </Link>
                </li>

                <li className="genre-item">
                    <Link to = '/Undergrounds' className="genre-links">  UNDERGROUNDS </Link>
                </li>

            </ul>
        </>



    );
}

export default GenreList;