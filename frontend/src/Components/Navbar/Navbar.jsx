import React, { useState } from "react";
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStethoscope,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Navbar() {
  const [navClick, setNavClick] = useState(false);
  const navigate = useNavigate(); 

  const openNav = () => {
    setNavClick(!navClick);
  };
  const handleConsultationClick = () => {
    navigate("/consultation");
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
      
        <Link to="/">
        <FontAwesomeIcon icon={faStethoscope} className="navbar-logo" /> FixHealth
        </Link>
      </h1>

      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li>
        <li>
          <button className="appointment-btn" onClick={handleConsultationClick} >
            Book Now
          </button>
        </li>
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${navClick ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;