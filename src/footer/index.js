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

const Contact = () => <div style={{flex:'1 0 0'}}>3262 NE Martin Luther King Jr Blvd, Portland, OR | 97212(503) 444-7928 </div>
export default props => (
 <div className="footerContainer">
  <div>
    <Contact /> 
  </div>
    <div>
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