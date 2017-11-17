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


export default props => (
 <div className="footerContainer">
    <SocialMediaBar
        icons={MINIMAL_ICONS}
        iconColor={'black'}
        iconOpacity={0.75}
        iconSize={'1.5em'}
        hoverColor={'#895FAD'}
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
    );