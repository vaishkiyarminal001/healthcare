// Reviews.js
import React, { useState } from "react";
import { customerReviews } from "./customerReviews"; 
import "./Testimonials.css";

function Testimonials() {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewsLength = customerReviews.length;

  const handleReviewsUpdation = (index) => {
    const reviewMessage = customerReviews[index];
    return {
      name: reviewMessage.name,
      location: reviewMessage.location,
      message: reviewMessage.message,
      image: reviewMessage.image,
    };
  };

  const handleNextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviewsLength);
  };

  const handlePrevReview = () => {
    setCurrentReview((prevReview) => (prevReview - 1 + reviewsLength) % reviewsLength);
  };

  const currentReviewDetails = handleReviewsUpdation(currentReview);

  return (
    <div className="review-section" id="reviews">
      <div className="text-container">
        <p className="txt-title">
          More than <span className="text-num">1500+ Customers</span>
        </p>

        <p className="text-desc">Don't just take our word, delve into the testimonials from our satisfied clients.</p>

        <div className="review-card ">
          <div className="text-format">
            <span className="quote1">''</span>
            <span className="review">{currentReviewDetails.message}</span>
            <span className="quote2">''</span>
          </div>

          <div className="authors">
            <div className="names">
              <img className="reviewer-img" src={currentReviewDetails.image} alt={`${currentReviewDetails.name}'s avatar`} />
              <div>
                <p className="reviewer-name">{currentReviewDetails.name}</p>
                <p className="reviewer-place">{currentReviewDetails.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rw-btns">
          <button className="rw-next-btn" type="button" onClick={handlePrevReview}>
            ←
          </button>
          <button className="rw-next-btn" type="button" onClick={handleNextReview}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;