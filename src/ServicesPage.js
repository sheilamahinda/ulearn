import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ServicesPage.css'; // Create a new CSS file for styles
import Testimonials from './Testimonials'; // Import Testimonials if needed



function ServicesPage() {
  const [stories, setStories] = useState([
    {
      id: 1,
      title: "From Struggle to Success: Jane's Journey",
      content: "Jane overcame significant challenges to achieve her financial independence through careful budgeting and strategic investments.",
      category: "Entrepreneurship"
    },
    {
      id: 2,
      title: "Eva's Path to Leadership",
      content: "Eva shares how mentorship and skill-building helped her rise to a leadership position in her company.",
      category: "Career Advancement"
    },
    // Add more stories as needed
  ]);

  const handleSubmitStory = (newStory) => {
    setStories([...stories, newStory]);
  };

  return (
    <div className="App">
     <header>
             <nav className="navbar">
               <div className="logo">
                 <img src="/glogo.png" alt="Native English Logo" />
               </div>
               <ul className="nav-links">
                 <li><a href="/">Home</a></li>
                 
                 <li><a href="/ServicesPage">Services</a></li>
                 
                 <li><Link to="/profiles">Profile/Dashboard</Link></li> {/* Update the Link to point to login */}
               </ul>
               <button className="contact-btn">Contact</button>
             </nav>
           </header>

      <section className="hero full-width">
        <h1>
          <span className="highlight-green">Empowering Trade</span> <br />
          Through Success Stories.
        </h1>
        <p>Discover inspiring journeys of businesses that have achieved growth and success through efficient shipping and logistics solutions.</p>
      </section>

      <section id="services" className="services">
  <h2>Services Offered by Express Bandari Logistics</h2>

  {/* One-on-One Mentorship Section */}
  <div className="service-section alt-layout">
    <img src="/bwm.jpg" alt="Mentorship" className="service-image" />
    <div className="content">
      <h3>Freight Forwarding and Transportation Services</h3>
      <p>
      Express Bandari Logistics specializes in comprehensive freight forwarding solutions for businesses of all sizes. We handle the seamless transportation of goods across domestic and international borders via land, sea, and air. Our services include end-to-end logistics management, ensuring that your cargo is transported efficiently, securely, and on time. Whether it’s small parcels, bulk shipments, or specialized goods, our team ensures the highest standards of reliability and professionalism.
      </p>
    </div>
  </div>

  {/* Mentor Resources Section */}
  <div className="service-section">
    <img src="/bwm1.jpg" alt="Resources from Mentors" className="service-image" />
    <div className="content">
      <h3>Customs Clearance and Compliance</h3>
      <p>
      Navigating customs regulations can be complex, but Express Bandari Logistics simplifies this process by offering expert customs brokerage services. We handle all aspects of customs documentation, tariff classification, and import/export compliance to ensure that your shipments move smoothly across borders. Our experienced team stays updated on the latest regulatory requirements, minimizing delays and ensuring legal compliance, so you can focus on growing your business.
      </p>
    </div>
  </div>

  {/* Budget Planner Section */}
  <div className="service-section alt-layout">
    <img src="/bwm2.jpg" alt="Budget Planner" className="service-image" />
    <div className="content">
      <h3>Warehousing and Storage Solutions</h3>
      <p>
      Our state-of-the-art warehousing facilities are designed to provide secure and efficient storage solutions for your goods. We offer flexible storage options, including short-term and long-term solutions tailored to your business needs. Equipped with modern inventory management systems, our warehouses ensure the safe handling and easy accessibility of your products. Value-added services such as packaging, labeling, and quality inspections are also available to enhance your supply chain.
      </p>
      
    </div>
  </div>

  {/* Leadership Skills Practice Section */}
  <div className="service-section">
    <img src="/bwm3.jpg" alt="Leadership Skills" className="service-image" />
    <div className="content">
      <h3>Last-Mile Delivery and Distribution</h3>
      <p>
      Express Bandari Logistics ensures that your products reach their final destination with our reliable last-mile delivery services. Whether delivering directly to businesses, warehouses, or end consumers, we prioritize timely and accurate deliveries. Our advanced tracking systems provide real-time updates, giving you full visibility of your shipments. With a fleet of vehicles optimized for various cargo sizes, we guarantee safe and efficient distribution across urban and rural areas.
      </p>
      
    </div>
  </div>

  {/* Progress Tracking Section */}
  <div className="service-section alt-layout">
    <img src="/bwm4.jpg" alt="Progress Tracking" className="service-image" />
    <div className="content">
      <h3>Specialized Logistics Services</h3>
      <p>
      To meet the unique demands of specific industries, we provide specialized logistics solutions. These include temperature-controlled transport for perishable goods, hazardous materials handling, and oversized cargo management. Additionally, we offer project logistics for industries such as construction, mining, and manufacturing, ensuring that complex logistics needs are met with precision and expertise. At Express Bandari Logistics, we tailor our services to address the specific challenges of your supply chain, delivering unparalleled value and efficiency.
      </p>
    </div>
  </div>
</section>



      <section className="success-stories">
        <h2>Impactful Success Stories</h2>
        <div className="story-cards">
          {stories.map(story => (
            <div key={story.id} className="story-card">
              <h3>{story.title}</h3>
              <p>{story.content}</p>
              <p className="category">{story.category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="user-submissions">
        <h2>Share Your Story</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const newStory = {
            id: stories.length + 1,
            title: e.target.title.value,
            content: e.target.content.value,
            category: e.target.category.value
          };
          handleSubmitStory(newStory);
          e.target.reset();
        }}>
          <input type="text" name="title" placeholder="Story Title" required />
          <textarea name="content" placeholder="Your Story" required />
          <input type="text" name="category" placeholder="Category" required />
          <button type="submit">Submit</button>
        </form>
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

export default ServicesPage;
