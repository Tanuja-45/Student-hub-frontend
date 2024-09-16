import React from 'react';
import './Home.css'

function Home() {
  return (
    <div>
      {/* First Row: Welcome Section */}
      <div className="welcome-section">
     
        <div className="welcome-text">
          <h1>Empower Your Academic Journey.</h1>
          <p>
          Your all-in-one platform for academic resources, student support, and campus updates.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="welcome-image" style={{ backgroundImage: 'url("https://architizer-prod.imgix.net/media/1426085542801666_10_Learning_Hub_Classroom_interior_with_passive_ventilation_system_CREDIT_Hufton_and_Crow.jpg?fit=max&w=1680&q=60&auto=format&auto=compress&cs=strip")' }}>
        </div>
      </div>

      {/* Second Row: 3 Button-Like Cards with No Gap */}
      <div className="button-card-row">
  <div className="button-card card-light-pink">
    <h4>Attendance tracker</h4>
    <p>Effortlessly track your daily attendance and maintain a consistent record.</p>
    <div className=" btn btn-custom">Track my attendance</div>
  </div>

  <div className="button-card card-white">
    <h4>Curriculum Progress</h4>
    <p>Easily track your subjects, assignments, and academic goals in one place.</p>
    <div className="btn btn-custom">Curriculum tracker</div>
  </div>

  <div className="button-card card-danger">
    <h4>Notes & Reminder</h4>
    <p>Organize your tasks and stay on top of deadlines with timely reminders.</p>
    <div className="btn btn-custom">Daily notes & reminders</div>
  </div>
</div>


      {/* Third Row: Final Section */}
      <div className="final-section">
        <p>
        Discover a world of resources and opportunities tailored just for you. From academic support and career services to events 
        and community engagement, we’ve got everything you need to succeed and enjoy your student life. Dive in and make the most of your journey with us! </p>
      </div>
    </div>
  );
}

export default Home;
