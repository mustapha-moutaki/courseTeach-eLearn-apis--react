import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card" style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseCard;
