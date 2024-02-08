import React from "react";
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassStart, faCity, faComment, faMedal, faClock, faHospital, faUsers, faHandshake ,faUserFriends} from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <h2 id="heading">About Us</h2>
        <p>
          On a mission to make people's lives pain-free, Health Center is dedicated to providing convenient and effective physiotherapy care. With over 1,00,000 successful sessions in 100+ cities, we bring relief to patients from metro to taluka places.
        </p>
        <div className="about-details">
          <div>
            <h3><FontAwesomeIcon icon={faHourglassStart} /> Sessions</h3>
            <p>1,00,000+</p>
            <p>Convenient & Effective care.</p>
          </div>
          <div>
            <h3><FontAwesomeIcon icon={faCity} /> Cities</h3>
            <p>100+</p>
            <p>Patients from metro to taluka places.</p>
          </div>
          <div>
            <h3><FontAwesomeIcon icon={faComment} /> Patient Feedback</h3>
            <p>3.8/4</p>
            <p>Patient satisfaction is our primary goal.</p>
          </div>
        </div>
        <h3>Expert Physiotherapists from Across the Country</h3>
        <div className="team-details">
          <p>Our team consists of:</p>
          <ul>
            <li><FontAwesomeIcon icon={faMedal} /> Gold Medalists in graduate & post-graduate physiotherapy.</li>
            <li><FontAwesomeIcon icon={faClock} /> More than 30 years of physiotherapy experience.</li>
            <li><FontAwesomeIcon icon={faHospital} /> Worked with AIIMS, Fortis, CMC Vellore, Sancheti Hospital, etc.</li>
            <li><FontAwesomeIcon icon={faUsers} /> Treated more than 20,000 patients.</li>
          </ul>
        </div>
        <h3><FontAwesomeIcon icon={faHandshake} /> Investors & Advisors</h3>
        <p>Our investors have backed the likes of Ola, Urban Company, Snapdeal, Khatabook.</p>

        <div className="Info-section">
          <h3><FontAwesomeIcon icon={faUserFriends} />Founder and Co-Founder</h3>
          <div className="small-card">
          <div className="founder-section">
            <div className="founder">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6obxDV8mEtU3a111zw1YG6Km9hEvOqdBYA&usqp=CAU" alt="Founder" />
            </div>
            <div className="founder-text">
              <p>Dr. Sheetal Mundhada(Founder)</p>
              <p>BPTh/BPT, Physiotherapist with 29 Years of Experience
              Established Central India's largest physiotherapy center with unique services. First certified lymphedema therapist, leading an all-women clinical team and innovating in rehabilitation.





</p>
            </div>
            </div>
          

        <div className="co-founder-section">
            <div className="co-founder">
              <img src="https://media.licdn.com/dms/image/D5603AQHkxvpr9_-JTA/profile-displayphoto-shrink_800_800/0/1696765399617?e=2147483647&v=beta&t=aWj8IF4PPplxarH4oP6P_qB7l2QwCHRbCWIilCkiOJQ" alt="Co-Founder" />
            </div>
            <div className="co-founder-text">
              <p>Ashutosh Mundhada (Co-founder)</p>
              <p>“We will not just say that we will connect you to a good expert and leave it at that.
                 We will help you get rid of the pain altogether. That’s a vertical play that differentiates us because,
                  at the end of the day, people want a solution to their problem,” he says.</p>
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;