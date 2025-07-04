import React from "react";
import {
  Container,
  Typography,
  Box,
} from "@mui/material";
import { courses } from "../data/courses";
import CourseCard from "./CourseCard";

export default function CoursesSection({ onStartCourse }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, pb: 6  }}>
      <Typography
        variant="h4"
        fontWeight="medium"
        textAlign="center"
        gutterBottom
        sx={{ mb: 2 }}
      >
        Наші курси
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{ color: "text.secondary", maxWidth: 600, mx: "auto", mb: 5 }}
      >
        Виберіть курс, який підходить вашому рівню підготовки
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} onStartCourse={onStartCourse} />
        ))}
      </Box>
    </Container>
  );
}