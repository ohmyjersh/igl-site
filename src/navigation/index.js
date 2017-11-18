import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default () => (
    <nav className="flexContainer blueBackground">
    <ul className="nav flexContainer flexItem flexStart">
        <li><Link to="/">Influential Grooming Lounge</Link></li>    
    </ul>
    <ul className="nav flexContainer flexEnd">   
        <li><Link to="/about">About</Link></li>
        <li><Link to="/book">Book</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
</nav>
)