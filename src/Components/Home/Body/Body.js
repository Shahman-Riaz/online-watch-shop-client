import React from 'react';
import Header from '../Header/Header';
import BodyServices from '../BodyServices/BodyServices';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

const Body = () => {
    return (
        <main>
            <Header />
            <BodyServices />
            <Footer />
        </main>
    );
};

export default Body;