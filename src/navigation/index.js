import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png'
import './nav.css';

export default () => (
    <nav className="flexContainer">
        <ul className="nav flexContainer flexStart">
            <li><Link to="/">
                <img alt="logo" style={{width:'35%'}}src={logo} />
            </Link></li>    
        </ul>
        <ul className="nav flexContainer flexEnd">   
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
)