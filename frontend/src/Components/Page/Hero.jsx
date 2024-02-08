import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DoctorImage1 from './images/heroImage.jpg';
import DoctorImage2 from './images/heroImage1.jpg';
import DoctorImage3 from './images/heroImage2.jpeg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [Up, setUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConsultationClick = () => {
    navigate("/consultation");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setUp(true);
      } else {
        setUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="container-box" id="hero">
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="hero-section">
              <div className="text-section">
                <p className="headline">HEALTH IS A PRICELESS WEALTH.INVEST WHILE YOU CAN</p>
                <h2 className="text-title">
                  Prioritize your health. Book with our doctors today!
                </h2>
                <p className="text-descritpion">
                  Connect with our online healthcare experts for instant medical advice, virtual prescriptions,
                  refills, and medical notes. On-demand health services, right at your fingertips.
                </p>
                <button
                  className="appointment-butn"
                  type="button"
                  onClick={handleConsultationClick}
                >
                  <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
                </button>
              </div>

              <div className="hero-image">
                <img className="hero-image1" src={DoctorImage1} alt="Doctor" />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="hero-section">
              <div className="text-section">
                <h2 className="headline"  >HOW FIX HEALTH IS ADDRESSING THE PAIN POINTS OF PATIENTS ONLINE</h2>
                <p className="text-description">Fix Health, an online physiotherapy service co-founded by Ashutosh Mundhada, delivers expert care with a team boasting over 30 years of experience. </p>
              </div>

              <div className="hero-image">
                <img className="hero-image2" src={DoctorImage2} alt="Doctor" />
              </div>
            </div>
        
          </div>

          <div className="carousel-item">
            <div className="hero-section">
              <div className="text-section">
                <h2 className="headline">Fix Health Raises $350,000 In Pre-Seed Funding Round Led By Better Capital</h2>
                <p  className="text-descritpion">Fix Health, an online physiotherapy and pain relief startup, raised $350,000 in a pre-seed funding round led by Better Capital. Snapdeal founders Kunal Bahl and Rohit Bansal's Titan Capital, along with BITS Pilani angel investors, also participated in the funding.</p>
              </div>

              <div className="hero-image">
                <img className="hero-image3" src={DoctorImage3} alt="Doctor" />
              </div>
            </div>
            </div>

          
        </div>

        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${Up ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;