import React from 'react';
import Header from '../Header/Header';
import BodyServices from '../BodyServices/BodyServices';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import MessageUs from '../MessageUs/MessageUs';

const Body = () => {
    return (
        <main>
            <Header />
            <BodyServices />
            <MessageUs />
            <Footer />
        </main>
    );
};

export default Body;