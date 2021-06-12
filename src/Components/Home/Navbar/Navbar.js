import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand navbar-light fixed-top nav-section " >
            <div className="container-fluid">
                <Link to='/' className="navbar-brand"><h1 className="logo">Online Watch Shop</h1></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link bottom-style ms-5 active fs-5" to='/'>Brand Watch</Link>
                        </li>

                        <li class="nav-item">
                            <HashLink class="nav-link bottom-style ms-5 active fs-5" to='/#bodyServices'>Services</HashLink>
                        </li>

                        <li class="nav-item">
                            <HashLink class="nav-link bottom-style ms-5 active fs-5" to='/#footer'>Quick Links</HashLink>
                        </li>
                        
                        <li class="nav-item">
                            <Link to="/login" className='nav-link bottom-style ms-5 login-btn fs-5'>Login</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/checkout" className="nav-link fs-3 px-4"><FontAwesomeIcon className="cart-iconLink" icon={faCartArrowDown} /><span className="cartNumber fs-5 px-1">5</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;