import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">Health Center</div>
                <p className="footer-text">
                    Providing personalized healthcare solutions for a better life.
                </p>
                <div className="footer-links">
                    <a href="#home" className="footer-link">Home</a>
                    <a href="#about" className="footer-link">About</a>
                    <div className="footer-contact">
                        <p className="contact-details">Contact: support@healthcenter.com | +1 (123) 456-7890</p>
                    </div>
                </div>
                <div className="footer-social-icons">
                    <FontAwesomeIcon icon={faFacebook} className="footer-social-icon" />
                    <FontAwesomeIcon icon={faTwitter} className="footer-social-icon" />
                    <FontAwesomeIcon icon={faInstagram} className="footer-social-icon" />
                </div>
                <p className="footer-copyright">&copy; 2024 Your Health App. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;