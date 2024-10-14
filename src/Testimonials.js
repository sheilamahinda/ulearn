import React, { useEffect } from 'react';
import './App.css';

function Testimonials() {
  useEffect(() => {
    const testimonialScroll = document.querySelector('.testimonial-scroll');
    const slides = document.querySelectorAll('.slide-image');

    // Clone the slides to create an infinite loop
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      testimonialScroll.appendChild(clone);
    });
  }, []);

  return (
    <div className="testimonial-container">
      <div className="testimonial-scroll">
        {/* Slide images */}
        <div className="slide-image">
          <img src="/luca.jpg" alt="Slide 1" />
        </div>
        <div className="slide-image">
          <img src="/grp5.jpg" alt="Slide 5" />
        </div>
        <div className="slide-image">
          <img src="/nick.jpg" alt="Slide 2" />
        </div>
        <div className="slide-image">
          <img src="/grp4.jpg" alt="Slide 4" />
        </div>
        <div className="slide-image">
          <img src="/moha.jpg" alt="Slide 3" />
        </div>
        <div className="slide-image">
          <img src="/grp7.jpg" alt="Slide 3" />
        </div>
        <div className="slide-image">
          <img src="/cl.jpg" alt="Slide 3" />
        </div>
        <div className="slide-image">
          <img src="/grp9.jpg" alt="Slide 3" />
        </div>
        <div className="slide-image">
          <img src="/db.jpg" alt="Slide 3" />
        </div>
        
      </div>
    </div>
  );
}

export default Testimonials;
