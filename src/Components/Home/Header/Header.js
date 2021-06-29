import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import Clock from 'react-live-clock';


const Header = () => {
    return (
        <section className="header" id="header">
            <Navbar />
           <Link to='/#bodyWatchCollection'>
                <div className="header-text-container text-center p-2">
                    <h3>
                        <Clock format="HH:mm:ss a" interval={1000} ticking={true} />
                    </h3>
                    <h1 className="header-tex-color">Online Watch Shop</h1>
                    <h4>Grab Your Choice</h4>
                </div>
           </Link>
        </section>
    );
};

export default Header;