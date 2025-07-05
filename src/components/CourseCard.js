import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow border-primary">
      <div className="card-body bg-light">
        <h5 className="card-title text-primary">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <Link to={`/courses/${course.id}`} className="btn btn-outline-primary btn-sm">
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default CourseCard;
