import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark py-3">
        <div className="container">
            <div className="row footer-top py-5">
                <div className="col-md-6 mb-5">
                <Link to='/' className="navbar-brand"><h1 className="logo">Online Watch Shop</h1></Link>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled">
                        <li><Link className="footer-link" to="/about">About Online Order</Link></li>
                        <li><Link className="footer-link" to="/review">Watch Customer Review</Link></li>
                        <li><Link className="footer-link" to="/login">Sign up to deliver</Link></li>
                        <li><Link className="footer-link" to="/sell">I want to sell</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled">
                        <li><Link className="footer-link" to="/help">Get Help</Link></li>
                        <li><Link className="footer-link" to="/faq">Read FAQ</Link></li>
                        <li><Link className="footer-link" to="/cities">View Our Delivery Area</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom d-flex justify-content-between align-items-center">
                <small className="text-secondary fs-6">Copyright &copy; {(new Date().getFullYear())} OnlineWatchShop.com Limited. All rights reserved.</small>
                <ul className="list-inline">
                    
                    <li className="list-inline-item ml-3"><Link className="footer-link">Privacy Policy &middot;</Link></li>
                    <li className="list-inline-item ml-3"><Link className="footer-link">Cookie Policy &middot;</Link></li>
                    <li className="list-inline-item ml-3"><Link className="footer-link">Purchasing Policy &middot;</Link></li>
                    <li className="list-inline-item ml-3"><Link className="footer-link">Terms of Use</Link></li>
                </ul>

            </div>
        </div>
    </footer>
    );
};

export default Footer;