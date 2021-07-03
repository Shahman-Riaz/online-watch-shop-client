import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import Clock from 'react-live-clock';
import BackgroundSlider from 'react-background-slider'
import bg from '../../Images/bg.jpg'
import bg2 from '../../Images/bg2.jpg'
import bg3 from '../../Images/bg3.jpg'
import bg4 from '../../Images/bg4.jpg'
import bg5 from '../../Images/bg5.jpg'
import bg6 from '../../Images/bg6.jpg'


const Header = () => {
    return (
        <section className="header" id="header">
            <BackgroundSlider
  images={[ bg6, bg, bg5, bg2, bg4, bg3,]}
  duration={4} transition={2} />
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