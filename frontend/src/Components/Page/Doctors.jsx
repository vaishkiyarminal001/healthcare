import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorsCard";
import "./Doctors.css";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch data from the external API
    fetch("https://mocki.io/v1/554b03d9-2814-433a-87d9-bc0ef471698f")
      .then((response) => response.json())
      .then((data) => setDoctors(data.doctors))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this effect will run once when the component mounts

  return (
    <div className="doctor-section" id="doctors">
      <div className="title-content">
        <h3 className="title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="cards-content">
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            img={doctor.image} // Use the 'image' field from the API
            name={doctor.name}
            title={doctor.expertise}
            stethocope={doctor.experience_years} // You might need to adjust this based on your actual data
            reviews={`Certifications: ${doctor.certifications.join(", ")}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Doctors;