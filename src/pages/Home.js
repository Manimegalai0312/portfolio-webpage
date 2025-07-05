import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'HTML & CSS',
    description: 'Build beautiful websites using HTML and CSS.',
  },
  {
    id: 2,
    title: 'JavaScript Essentials',
    description: 'Understand core JavaScript concepts.',
  },
  {
    id: 3,
    title: 'React Basics',
    description: 'Learn to build UIs using React.',
  },
  {
    id: 4,
    title: 'Node.js Fundamentals',
    description: 'Server-side JavaScript with Node.js.',
  },
  {
    id: 5,
    title: 'Python for Beginners',
    description: 'Get started with Python programming.',
  },
  {
    id: 6,
    title: 'Database Basics',
    description: 'Learn SQL and database concepts.',
  }
];

const courseVideos = {
  1: "https://www.youtube.com/embed/UB1O30fR-EE",
  2: "https://www.youtube.com/embed/hdI2bqOjy3c",
  3: "https://www.youtube.com/embed/bMknfKXIFA8",
  4: "https://www.youtube.com/embed/TlB_eWDSMt4",
  5: "https://www.youtube.com/embed/_uQrJ0TkZlc",
  6: "https://www.youtube.com/embed/HXV3zeQKqGY"
};

const Home = () => {
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const progress = Math.floor(Math.random() * 100);
  const selectedVideo = courseVideos[selectedCourseId];

  const handleCourseClick = (id) => {
    setSelectedCourseId(id);
  };

  const handleBack = () => {
    setSelectedCourseId(null);
  };

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
      <div className="flex-grow-1 bg-light overflow-auto">
        <div className="container py-5">

          {/* Welcome Header */}
          <div className="text-center bg-primary text-white p-5 rounded shadow mb-5">
            <h1 className="display-4 mb-3">🎓 Welcome to E-Learn</h1>
            <p className="lead mb-4">Learn anything, anytime, anywhere — now in full color!</p>
            <div className="d-flex flex-column align-items-center gap-3">
              <Link to="/courses" className="btn btn-light btn-lg w-50">📚 Browse Courses</Link>
              <Link to="/courses/1" className="btn btn-light btn-lg w-50">▶ Watch Sample Course</Link>
              <Link to="/login" className="btn btn-outline-light btn-lg w-50">🔐 Login</Link>
              <Link to="/register" className="btn btn-outline-light btn-lg w-50">📝 Register</Link>
              <Link to="/dashboard" className="btn btn-success btn-lg w-50">📊 Go to Dashboard</Link>
            </div>
          </div>

          {/* Courses Section */}
          <div className="container mt-4 mb-5">
            <h2 className="mb-4">📘 {selectedCourseId ? 'Course Detail' : 'Available Courses'}</h2>
            {!selectedCourseId ? (
              <div className="row">
                {courses.map(course => (
                  <div key={course.id} className="col-md-4 mb-4">
                    <div
                      className="border rounded p-3 h-100 shadow-sm bg-white"
                      style={{ cursor: 'pointer', transition: '0.3s' }}
                      onClick={() => handleCourseClick(course.id)}
                    >
                      <h5 className="text-primary">{course.title}</h5>
                      <p className="mb-3">{course.description}</p>
                      <button className="btn btn-outline-primary btn-sm">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {selectedVideo ? (
                  <>
                    <div className="ratio ratio-16x9 mb-4">
                      <iframe
                        src={selectedVideo}
                        title="Course Video"
                        allowFullScreen
                        style={{ border: 'none' }}
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {progress}%
                      </div>
                    </div>
                  </>
                ) : (
                  <p>No video available for this course.</p>
                )}
                <button className="btn btn-secondary mt-3" onClick={handleBack}>⬅ Back to Courses</button>
              </>
            )}
          </div>

          {/* Dashboard Widgets */}
          <div className="row text-center g-4 mb-5">
            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">Enrolled Courses</h5>
                  <p className="display-6">3</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">Progress</h5>
                  <p className="display-6">{progress}%</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">New Recommendations</h5>
                  <p className="display-6">5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="d-flex justify-content-center align-items-center min-vh-50 bg-white mb-5">
            <div className="card shadow p-4 w-100" style={{ maxWidth: '450px' }}>
              <h2 className="text-center mb-4">🔐 Login</h2>
              <input type="email" className="form-control mb-3" placeholder="Email" />
              <input type="password" className="form-control mb-4" placeholder="Password" />
              <button className="btn btn-dark w-100 py-2 fs-5">Login</button>
            </div>
          </div>

          {/* Register Form */}
          <div className="d-flex justify-content-center align-items-center bg-white mb-5" style={{ minHeight: '60vh' }}>
            <div className="card shadow p-4 w-100" style={{ maxWidth: '450px' }}>
              <h2 className="text-center mb-4">📝 Register</h2>
              <input type="text" className="form-control mb-3" placeholder="Name" />
              <input type="email" className="form-control mb-3" placeholder="Email" />
              <input type="password" className="form-control mb-4" placeholder="Password" />
              <button className="btn btn-primary w-100 py-2 fs-5">Register</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
