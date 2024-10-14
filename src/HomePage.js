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
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><Link to="/profiles">Profile/Dashboard</Link></li> {/* Update the Link to point to login */}
          </ul>
          <button className="contact-btn">Contact</button>
        </nav>
      </header>

      <section className="hero full-width">
        <h1>
          <span className="highlight-green">This is Your Gateway to</span> <br />
          Unlimited Educational Resources
        </h1>
        <p>Achieve your fluency goals with the best English learning resources.</p>
        <button className="cta-btn">Start Today</button>
      </section>

      <section className="challenges-solutions full-width">
        <div className="column challenges">
          <h2>85%</h2>
          <p>Reliable.</p>
        </div>
        <div className="column solutions">
          <h2>86%</h2>
          <p>Convenient</p>
        </div>
        <div className="column solutions">
          <h2>88%</h2>
          <p>Assurance</p>
        </div>
      </section>

      <section className="welcome">
        <h2>Welcome</h2>
        <p>Our platform provides students worldwide with the best educational resources. We pride ourselves on creating a supportive and engaging learning environment, where learners can connect, collaborate, and share knowledge. Our dedicated instructors and a vibrant community of peers are here to help you navigate through challenges, provide feedback, and celebrate your achievements. Whether you're looking to build new skills for a career change, improve your current expertise, or simply explore new interests, we are here to guide you every step of the way.</p>
      </section>

      <section className="standout full-width">
        <img src="/group.jpeg" alt="Standout" />
        <div className="content">
          <h2>Discover More About Our Services</h2>
          <p>
            We are committed to providing exceptional service and creating long-lasting value for our clients. Our innovative solutions are designed to meet your financial needs and exceed your expectations.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </section>

      {/* Testimonials Section: This comes right after Welcome */}
      <Testimonials />

      <section className="student-feedback">
        <h3>Student Feedback</h3>
        <div className="feedback-cards">
          <div className="feedback">
            <p>"This platform has significantly improved my speaking skills!"</p>
            <h4>Jane Milwa</h4>
          </div>
          <div className="feedback">
            <p>"I feel more confident in business meetings thanks to these courses."</p>
            <h4>Eva Kamira</h4>
          </div>
        </div>
      </section>

      <section className="explore-courses">
        <h3>Explore our Courses</h3>
        <p>Browse through a variety of expertly designed courses to master English.</p>
        <button className="explore-btn">Explore Now</button>
      </section>

      <footer>
        <div className="footer-content">
          <div className="subscribe-section">
            <h4>Subscribe to our Newsletter</h4>
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="footer-links">
            <p>© 2024 Native English. All rights reserved.</p>
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
