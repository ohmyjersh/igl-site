import React from 'react';
import Home from './home';
import About from './about';
import ImageGallery from './imageGallery'
import Book from './book';
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
        path: '/book',
        component: () => <Book />
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