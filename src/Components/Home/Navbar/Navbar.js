import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartArrowDown, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import logo from '../../Images/logo.png'

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg top-navigation">
      <div class="container-fluid">
        <Link class="navbar-brand text-white text-left" href="#">
          <img height="15%" width="13%" src={logo} />
        </Link>
        <button
          class="navbar-toggler border border-light w-100"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-white"><FontAwesomeIcon className=" fs-2 cart-icon" icon={faBars} /></span>
        </button>
        <div class="collapse navbar-collapse px-1" id="navbarSupportedContent">
          <ul class="navbar-nav me-aut3 mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white fs-5" aria-current="page" href="#">
                About Us
              </a>
            </li>
            
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white fs-5"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Brands
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/rolex">
                  ROLEX
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/breitling">
                  BREITLING
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/tudor">
                  TUDOR
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/vacheronConstatin">
                  VACHERON CONSTANTIN
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fs-5" href="#">
                Testimonial
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fs-5" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item px-3">
                <form class="d-flex">
                <input
                  class="form-control me-2 w-75"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>
          <form className="p-4">
            <Link className="cart-container text-white"><FontAwesomeIcon className=" fs-2 cart-icon" icon={faCartArrowDown} /><sub className="fs-5 cart-text">3</sub></Link>
          </form>
           <button class="btn btn-light mx-3" type="submit">
              <Link to="/login" className="cart-container text-dark"><FontAwesomeIcon className="text-secondary fs-5" icon={faUserCircle}/> Login/Signup</Link>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
