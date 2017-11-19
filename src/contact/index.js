import React from 'react';
import "./contact.css";
import outsideLogo from '../images/influential-sign.png'
import map from '../images/igl-map.png';


const Hours = () => (
    <div className="hours">
        <div>Monday	Closed</div>
        <div>Tuesday 10AM–7PM</div>
        <div>Wednesday 10AM–7PM</div>
        <div>Thursday 10AM–7PM</div>
        <div>Friday 10AM–7PM</div>
        <div>Saturday 10AM–7PM</div>
        <div>Sunday	Closed</div>
        <div>Hours might differ on holidays!</div>
    </div>
)

const Address = () => <div>3262 NE Martin Luther King Jr Blvd, Portland, OR 97212</div>

const PhoneNumber = () => <div>(503) 444-7928</div>

export default () => (<div className="contactContainer">
        <div className="addressContainer">
            <img src={outsideLogo} alt={"map"}/> 
            <Hours />
            <Address />
            <PhoneNumber />
        </div>
        <img className="map" src={map} alt={"map"}/> 
    </div>)