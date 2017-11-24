import React from 'react';
import menu from '../images/menu.png';
import icon from '../images/icon.png';
import "./home.css";

export default () => (
    <div className="homeContainer">
        <About />
        <Services />
    </div>
);

const Services = () => (
<div className="servicesContainer">
    <img alt="services" className="services" src={menu} />
</div>);

const About = () => <div className="aboutContainer">
    <div>
        <p>
            At The Influential Grooming Lounge the client is our top priority. Our customers will be
            given the highest quality of service from the moment they walk in to the moment they
            leave. We believe that every customer that comes into our place will leave empowered,
            encouraged and influenced.
        </p>
    </div>
    <div>
        <p>
            Here at the Influential GL; we are committed to influencing our community not just with
    a haircut or service but with actions of involvement. We will influence beyond the chair.
    We will establish ourselves as a staple in our community. A place where one can come
    and be encouraged to go and be impactful and influential in their homes, workplaces,
    schools, etc.
    </p>
    </div>
    <div>
        <p>
            For us, it is more than a haircut/service. It is the enhancement of self, community
    influence and the solidarity of legacy!
    </p>
    </div>
    <div>
        <p>
            You Are Dope! You Are Community! You Are Influential!
    </p>
    </div>
    <div>
        <img alt="icon" src={icon} />
        </div>
</div>