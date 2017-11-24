import React from 'react';
import SocialMediaBar from 'react-social-media-bar';
import "./footer.css";

const MINIMAL_ICONS = [
    {
      media: 'instagram',
      link: 'https://www.instagram.com/theinfluentialgl/'
    },
    {
      media: 'facebook',
      link: 'https://www.facebook.com/TheInfluentialGL'
    },
    {
      media: 'yelp',
      link: 'https://www.yelp.com/biz/the-influential-grooming-lounge-portland'
    }
  ];

const clickMap = () => {
    if( (navigator.platform.indexOf("iPhone") !== -1) 
        || (navigator.platform.indexOf("iPod") !== -1)
        || (navigator.platform.indexOf("iPad") !== -1))
         return "maps://maps.google.com/maps/place/The+Influential+Grooming+Lounge/@45.5470622,-122.6614213,15z/data=!4m5!3m4!1s0x0:0xd4b4c98c931786c9!8m2!3d45.5470622!4d-122.6614213";
    else
        return "http://maps.google.com/maps/place/The+Influential+Grooming+Lounge/@45.5470622,-122.6614213,15z/data=!4m5!3m4!1s0x0:0xd4b4c98c931786c9!8m2!3d45.5470622!4d-122.6614213";
}

const Contact = () => <div className="contact"><a className="link" href={clickMap()} target="_blank">3262 NE Martin Luther King Jr Blvd, Portland, OR 97212</a> <b>|</b> <a className="link" href="tel:(503) 444-7928">(503) 444-7928</a></div>
export default props => (
 <div className="footerContainer">
    <Contact />
    <div className="social">
    <SocialMediaBar
        icons={MINIMAL_ICONS}
        iconColor={'black'}
        iconOpacity={0.75}
        iconSize={'1.5em'}
        hoverColor={'#ccc'}
        hoverOpacity={0.9}
        margin={{
            top: '10px',
            left: '10px',
            right: '10px',
            bottom: '12px'
        }}
        padding={{
            top: '3px',
            left: '2px',
            right: '2px',
            bottom: '3px'
        }}
    />
    </div>
    </div>
    );