import React from "react";
import HeroSection from "../components/HeroSection";
import CoursesSection from "../components/CoursesSection";

export default function HomePage({ onStartCourse }) {
  return (
    <>
      <HeroSection />
      <CoursesSection onStartCourse={onStartCourse} />
    </>
  );
}