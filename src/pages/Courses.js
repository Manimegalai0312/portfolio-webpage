import React from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  {
    id: 1,
    title: 'HTML & CSS',
    description: 'Build beautiful websites using HTML and CSS.',
    image: 'https://via.placeholder.com/300x150?text=HTML+CSS'
  },
  {
    id: 2,
    title: 'JavaScript Essentials',
    description: 'Understand core JavaScript concepts.',
    image: 'https://via.placeholder.com/300x150?text=JavaScript'
  },
  {
    id: 3,
    title: 'React Basics',
    description: 'Learn to build UIs using React.',
    image: 'https://via.placeholder.com/300x150?text=React'
  },
  {
    id: 4,
    title: 'Node.js Fundamentals',
    description: 'Server-side JavaScript with Node.js.',
    image: 'https://via.placeholder.com/300x150?text=Node.js'
  },
  {
    id: 5,
    title: 'Python for Beginners',
    description: 'Get started with Python programming.',
    image: 'https://via.placeholder.com/300x150?text=Python'
  },
  {
    id: 6,
    title: 'Database Basics',
    description: 'Learn SQL and database concepts.',
    image: 'https://via.placeholder.com/300x150?text=Database'
  }
];
const Courses = () => (
  <div className="container mt-4">
    <h2 className="mb-4">Available Courses</h2>
    <div className="row">
      {courses.map(course => <CourseCard key={course.id} course={course} />)}
    </div>
  </div>
);

export default Courses;
