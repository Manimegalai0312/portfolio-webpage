import React from 'react';
import { useParams, Link } from 'react-router-dom';

const courseVideos = {
  1: "https://www.youtube.com/embed/UB1O30fR-EE", // HTML
  2: "https://www.youtube.com/embed/hdI2bqOjy3c", // JS
  3: "https://www.youtube.com/embed/bMknfKXIFA8",  // React
  4: "https://www.youtube.com/embed/TlB_eWDSMt4",  // Node.js example
  5: "https://www.youtube.com/embed/_uQrJ0TkZlc",  // Python example
  6: "https://www.youtube.com/embed/HXV3zeQKqGY"   // Database example
};

const CourseDetail = () => {
  const { id } = useParams();
  const videoSrc = courseVideos[id];

  // Handle case if no video found for the id
  if (!videoSrc) {
    return (
      <div className="container mt-4">
        <h2>Course Detail</h2>
        <p>No video available for this course.</p>
        <Link to="/courses" className="btn btn-secondary mt-3">Back to Courses</Link>
      </div>
    );
  }

  const progress = Math.floor(Math.random() * 100);

  return (
    <div className="container mt-4">
      <h2>Course Detail</h2>
      <div className="ratio ratio-16x9 mb-4">
        <iframe
          src={videoSrc}
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
      <Link to="/courses" className="btn btn-secondary mt-3">
        Back to Courses
      </Link>
    </div>
  );
};

export default CourseDetail;

