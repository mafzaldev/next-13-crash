"use client";

import React, { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Courses from "./components/Courses";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <h1>Welcome to Next13Blog</h1>
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
