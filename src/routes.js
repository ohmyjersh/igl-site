import React from 'react';
import Home from './home';
import About from './about';
import ImageGallery from './imageGallery'
import Services from './services';
import Contact from './contact';

export default [
    {
        path: '/',
        exact: true,
        component: () => <Home />
    },
    {
        path: '/about',
        component: () => <About />
    },
    {
        path: '/services',
        component: () => <Services />
    },    
    {
        path: '/gallery',
        component: () => <ImageGallery />
    },
    {
        path: '/contact',
        component: () => <Contact />
    }
];