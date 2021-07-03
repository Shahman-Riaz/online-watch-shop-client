import React from 'react';
import Header from '../Header/Header';
import BodyServices from '../BodyServices/BodyServices';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import MessageUs from '../MessageUs/MessageUs';
import './Body.css'
import TestimonialHome from '../Testimonial/TestimonialHome';
import BodyWatchCollection from '../BodyWatchCollection/BodyWatchCollection';

const Body = () => {
    return (
        <main className="home-container">
            <Header />
            <BodyWatchCollection />
            <BodyServices />
            <TestimonialHome />
            <MessageUs />
            <Footer />
        </main>
    );
};

export default Body;