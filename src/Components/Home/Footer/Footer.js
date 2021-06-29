import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
    return (
        <footer className="footer-container">
        
            <div className="row mx-auto footer-link-container  container-fluid">
                <div className="col-md-3">
                    <HashLink to='/#header' className="navbar-brand text-center">
                        <h1><img src={logo} className="logo-icon"/></h1>
                        <h3 className="text-white">Online Watch shop</h3>
                    </HashLink>
                </div>

                <div className="col-md-2 py-5">
                    <ul className="list-unstyled">
                        <li><Link className="footer-link" to="/about">About Online Order</Link></li>
                        <li><Link className="footer-link" to="/review">Watch Customer Review</Link></li>
                        <li><Link className="footer-link" to="/login">Sign up to deliver</Link></li>
                        <li><Link className="footer-link" to="/sell">I want to sell</Link></li>
                    </ul>
                </div>
                <div className="col-md-2 py-5">
                    <ul className="list-unstyled">
                        <li><Link className="footer-link" to="/help">&middot; Get Help</Link></li>
                        <li><Link className="footer-link" to="/faq">&middot; Read FAQ</Link></li>
                        <li><Link className="footer-link" to="/cities">&middot; Delivery Area</Link></li>
                        <li><Link className="footer-link" to="/cities">&middot; Running Offers</Link></li>
                    </ul>
                </div>

                <div className="col-md-2 py-5">
                            <ul className="list-unstyled">
                                <li><Link className="footer-link">Privacy Policy &middot;</Link></li>
                                <li><Link className="footer-link">Cookie Policy &middot;</Link></li>
                                <li><Link className="footer-link">Purchasing Policy &middot;</Link></li>
                                <li><Link className="footer-link">Terms of Use &middot;</Link></li>
                            </ul>
                </div>
                <div className="col-md-2 py-5">
                            <ul className="list-unstyled">
                                <li><Link className="footer-link"><FontAwesomeIcon icon={faFacebook} /> Facebook</Link></li>
                                <li><Link className="footer-link"><FontAwesomeIcon icon={faInstagram} /> Instagram</Link></li>
                                <li><Link className="footer-link"><FontAwesomeIcon icon={faYoutube} /> YouTube</Link></li>
                                <li><Link className="footer-link"><FontAwesomeIcon icon={faTwitter} /> Twitter</Link></li>
                                <li><button className="btn btn-light subscribe-btn">Subscribe</button></li>

                            </ul>
                </div>
            </div>
            <div className="row footer-bottom">
                <div className="col-12">
                <p  className="text-center text-white py-1">© {(new Date().getFullYear())} OnlineWatchShop.Com<br/>All rights reserved. </p>
                </div>
            </div>
    </footer>
    );
};

export default Footer;