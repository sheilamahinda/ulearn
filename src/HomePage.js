// src/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomePage.css';
import Testimonials from './Testimonials'; // Import the Testimonials component

function HomePage() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src="/glogo.png" alt="Native English Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            
            <li><a href="/ServicesPage">Services</a></li>
            
            <li><Link to="/profiles">Profile/Dashboard</Link></li> {/* Update the Link to point to login */}
          </ul>
          <button className="contact-btn">Contact</button>
        </nav>
      </header>

      <section className="hero full-width">
        <h1>
          <span className="highlight-green">Logitex Cargo</span> <br />
          The link to your market and customers
        </h1>
        <p>Explore innovative solutions and strategic partnerships to unlock new growth opportunities and achieve operational excellence in the shipping industry.</p>
        <button className="cta-btn"><Link to="/LoginPage">BOOK TODAY</Link></button>
      </section>

      <section className="challenges-solutions full-width">
        <div className="column challenges">
          <h2>95%</h2>
          <p>Achieving operational efficiency.</p>
        </div>
        <div className="column solutions">
          <h2>96%</h2>
          <p>Leadership in the shipping industry.</p>
        </div>
        <div className="column solutions">
          <h2>98%</h2>
          <p>Empowered through mentorship and teamwork.</p>
        </div>
      </section>

      <section className="welcome">
        <h2>Welcome</h2>
        <p> Our platform is dedicated to driving efficiency and success in the shipping logistics industry. We offer a comprehensive range of services, including freight management, supply chain optimization, and timely delivery solutions. Join us to streamline your operations, reduce costs, and enhance the effectiveness of your logistics processes.</p>
      </section>

      <section className="standout full-width">
        <img src="/bwom.jpg" alt="Standout" />
        <div className="content">
          <h2>Discover More About Our Services</h2>
          <p>
          We support the growth and success of businesses in the logistics industry by providing high-quality services, efficient solutions, and expert guidance. Our platform is designed to help companies streamline operations, enhance their supply chain efficiency, and achieve their business goals in the logistics sector.
          </p>
          <button className="learn-more-button">
  <Link to="/services">Learn More</Link>
</button>
        </div>
      </section>

      {/* Testimonials Section: This comes right after Welcome */}
      <Testimonials />

      <section className="student-feedback">
        <h3>Student Feedback</h3>
        <div className="feedback-cards">
          <div className="feedback">
            <p>"This platform has connected me to logistics solutions and services I never imagined, helping streamline operations, optimize supply chains, and enhance business efficiency."</p>
            <h4>Jane Milwa</h4>
          </div>
          <div className="feedback">
            <p>"I've gained operational expertise and strategic insight, transforming the way I approach logistics and driving success in my career."</p>
            <h4>Eva Kamira</h4>
          </div>
        </div>
      </section>

      <section className="explore-courses">
        <h3>Explore our Services.</h3>
        <p>Access our comprehensive logistics solutions for efficient freight management, supply chain optimization, and reliable delivery.</p>
        <button className="explore-btn"><Link to="/services">Learn More</Link></button>
      </section>

      <footer>
        <div className="footer-content">
          <div className="subscribe-section">
            <h4>Subscribe to our Newsletter</h4>
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="footer-links">
            <p>© 2025 Logitex Cargo. All rights reserved.</p>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
