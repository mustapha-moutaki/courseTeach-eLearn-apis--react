import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import api from "../services/api";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.error("Erreur de chargement des cours :", err);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Cours</h2>
      {courses.length ? (
        courses.map((course) => <CourseCard key={course.id} course={course} />)
      ) : (
        <p>Aucun cours disponible.</p>
      )}
    </div>
  );
};

export default CourseList;
