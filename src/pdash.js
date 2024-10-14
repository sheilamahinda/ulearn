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
              <h3>Sheila Mahinda</h3>
              <p>
                Sheila Mahinda is a passionate student interested in leveraging
                technology to address societal challenges. She is focused on using her
                tech skills to create solutions that make a positive impact in
                society.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Class Timetable Section */}
      <div className="class-timetable">
        <h3>Class Timetable</h3>
        <table className="timetable-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00 AM - 10:30 AM</td>
              <td>Networking</td>
              <td></td>
              <td>digital systems</td>
              <td>information systems</td>
              <td></td>
            </tr>
            <tr>
              <td>11:00 AM - 12:30 PM</td>
              <td></td>
              <td>information systems</td>
              <td></td>
              <td>Networking</td>
              <td></td>
            </tr>
            <tr>
              <td>2:00 PM - 3:30 PM</td>
              <td>Digita systems</td>
              <td></td>
              <td>Networking</td>
              <td>Information systems</td>
              <td></td>
            </tr>
          </tbody>
        </table>
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


