import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartArrowDown,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav class="navbar navbar-expand-lg top-navigation">
      <div class="container-fluid">
        <Link class="navbar-brand text-white text-center" to="/">
          <h1 className="header-logo-name fs-1">Online Watch Shop</h1>
        </Link>
        <button
          class="navbar-toggler border"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-light">
            <FontAwesomeIcon className="" icon={faBars} />
          </span>
        </button>
        <div class="collapse navbar-collapse px-4" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <HashLink
                class="nav-link active text-white fs-5"
                aria-current="page"
                to="/#aboutUs"
              >
                About Us
              </HashLink>
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
                  <HashLink class="dropdown-item" to="/#allWatches">
                    All Watches<span className="hash-icon">*</span>
                  </HashLink>
                </li>
                <li>
                  <Link class="dropdown-item" to="/brand/Rolex">
                    ROLEX
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/brand/Breitling">
                    BREITLING
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/brand/Tudor">
                    TUDOR
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/brand/VacheronConstatin">
                    VACHERON CONSTANTIN
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <HashLink class="nav-link text-white fs-5" to="/#testimonial">
                Testimonial
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink
                to="/#contact"
                class="nav-link text-white fs-5"
                href="#"
              >
                Contact
              </HashLink>
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
            <Link className="cart-container text-white">
              <FontAwesomeIcon
                className=" fs-2 cart-icon"
                icon={faCartArrowDown}
              />
              <sub className="fs-6 cart-text">44</sub>
            </Link>
          </form>
          <button class="btn btn-light mx-3" type="submit">
            {loggedInUser.email ? (
              <Link to="/login" className="cart-container text-dark">
                {" "}
                <img
                  height="30"
                  width="30"
                  style={{ borderRadius: "50%" }}
                  src={loggedInUser.photoURL}
                />{" "}
                SignOut{" "}
              </Link>
            ) : (
              <Link to="/login" className="cart-container text-dark">
                <FontAwesomeIcon
                  className="text-secondary fs-5"
                  icon={faUserCircle}
                />{" "}
                Login/SignUp
              </Link>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
