

// Dashboard Component
export const Dashboard = () => {
 

  return (
    <div className="dashboard-content">
      <div className="dashboard-welcome">
        <h2>Welcome Back Sheila</h2>
        <p>Here’s an overview of your course</p>
      </div>

      <div className="recent-courses">
        <div className="courses-list">
          <div className="profile-card">
            <div className="profile-image">
              <img
                src="/av.png"
                alt="Student Profile"
                className="profile-pic"
              />
            </div>
            <div className="profile-details">
              <h3>Sheila</h3>
              <p>
              Sheila, Welcome aboard! At our shipping company, we're dedicated to ensuring seamless and reliable logistics solutions. Whether you're navigating local or international shipping, we're here to simplify your journey and deliver excellence. Let's set sail for success together!
              </p>
            </div>
          </div>
        </div>
      </div>

     {/* Mentorship and Leadership Opportunities Section */}
     <div className="mentorship-section">
        <h3>Mentorship & Leadership Opportunities</h3>
        <ul className="opportunities-list">
          <li>
            <strong>Leadership Workshop:</strong> Join us for a workshop focused on developing leadership skills tailored for women. <em>Next session: Nov 15, 2024</em>
          </li>
          <li>
            <strong>Mentorship Program:</strong> Connect with experienced mentors in your field. <em>Apply by: Nov 10, 2024</em>
          </li>
          <li>
            <strong>Networking Event:</strong> Participate in a networking event to meet like-minded women and industry leaders. <em>Date: Dec 5, 2024</em>
          </li>
          <li>
            <strong>Panel Discussion:</strong> Attend a panel discussion featuring successful women leaders sharing their journeys. <em>Date: Dec 10, 2024</em>
          </li>
        </ul>
      </div>

      <div className="daily-progress">
        {/* <h3>Daily progress</h3> */}
        <div className="progress-chart">
          {/* Insert chart here using any chart library like Chart.js */}
        </div>
      </div>
    </div>
  );
};


