import left from "../../assets/images/left-arrow.png";
import right from "../../assets/images/right-arrow.png";
import quote from "../../assets/images/quote.png";
import React from "react";

function Testimonial() {
  return (
    <div name="testimonial" className="testimonial-root">
      <div className="testimonial-header">
        <h2>Testimonials</h2>
      </div>
      <div className="comment-sec">
        <div className="arrow left">
          <img src={left} alt="left-arrow" />
        </div>

        <div className="comment comment-box1">
          <img className="immgg" src={quote} alt="quote icon" />
          <p>
            
            It's been really great place for me to find items that i could use
            in my house. QusaQus is one of
            those nice places that anyone could find intersting items.
          </p>
          <div className="testimonial-bottom">
            <span>Alemu solomon</span>
          </div>
        </div>
        <div className="arrow right">
          <img src={right} alt="right-arrow" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
