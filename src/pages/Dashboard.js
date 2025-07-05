import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <h4 className="mb-4">📊 Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link text-white">🏠 Home</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/courses" className="nav-link text-white">📚 Courses</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/dashboard" className="nav-link text-white">📊 Dashboard</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/login" className="nav-link text-white">🔐 Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light p-4 overflow-auto">
        <h2>Welcome Back 👋</h2>
        <p className="text-muted">Here's your latest activity, progress, and course recommendations.</p>

        {/* Dashboard Widgets */}
        <div className="container-fluid">
          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Enrolled Courses</h5>
                  <p className="card-text display-6">3</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Progress</h5>
                  <p className="card-text display-6">65%</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">New Recommendations</h5>
                  <p className="card-text display-6">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Dashboard;
