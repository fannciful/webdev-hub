import React, { useState } from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { lightTheme, darkTheme } from "./theme/theme";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import HTMLCoursePage from "./pages/HTMLCoursePage";
import CSSCoursePage from "./pages/CSSCoursePage";
import JSCoursePage from "./pages/JSCoursePage";
import REACTCoursePage from "./pages/REACTCoursePage";
import TSCoursePage from "./pages/TSCoursePage";
import MUICoursePage from "./pages/MUICoursePage";

export default function App() {
  const [lightMode, setLightMode] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleTheme = () => {
    setLightMode(!lightMode);
  };

  const handleStartCourse = (course) => {
    setSelectedCourse(course);
    
    // Виправлена логіка навігації
    if (course.title === "HTML Basics") {
      setCurrentPage("html-course");
    }
    else if (course.title === "CSS & Design") { // ← ВИПРАВЛЕНО З "CSS Basics" НА "CSS & Design"
      setCurrentPage("css-course");
    } 
     else if (course.title === "JavaScript") { // ← ВИПРАВЛЕНО З "CSS Basics" НА "CSS & Design"
      setCurrentPage("js-course");
    } 
     else if (course.title === "React") { // ← ВИПРАВЛЕНО З "CSS Basics" НА "CSS & Design"
      setCurrentPage("react-course");
    } 
     else if (course.title === "TypeScript") { // ← ВИПРАВЛЕНО З "CSS Basics" НА "CSS & Design"
      setCurrentPage("ts-course");
    } 
     else if (course.title === "MUI Design + TailwindCSS") { // ← ВИПРАВЛЕНО З "CSS Basics" НА "CSS & Design"
      setCurrentPage("mui-course");
    } 
    else {
      alert(`${course.title} course page is not implemented yet!`);
    }
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setSelectedCourse(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "html-course":
        return <HTMLCoursePage onBack={handleBackToHome} />;
      case "css-course":
        return <CSSCoursePage onBack={handleBackToHome} />;
      case "js-course":
        return <JSCoursePage onBack={handleBackToHome} />;
      case "react-course":
        return <REACTCoursePage onBack={handleBackToHome} />;
      case "ts-course":
        return <TSCoursePage onBack={handleBackToHome} />;
      case "mui-course":
        return <MUICoursePage onBack={handleBackToHome} />;
      case "home":
      default:
        return <HomePage onStartCourse={handleStartCourse} />;
    }
  };

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        <Header lightMode={lightMode} toggleTheme={toggleTheme} />
        {renderCurrentPage()}
      </Box>
    </ThemeProvider>
  );
}