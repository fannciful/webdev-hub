import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  Divider,
  useTheme,
} from "@mui/material";

export default function CourseCard({ course, onStartCourse }) {
  const Icon = course.icon;
  const theme = useTheme();

  return (
    <Card
      sx={{
        background: theme.palette.background.paper,
        borderRadius: "16px",
        height: 280,
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        boxShadow: theme.palette.mode === "dark"
          ? "0 0 0 1px #2a2a2a"
          : "0 0 0 1px #ddd",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 6px 16px rgba(0, 0, 0, 0.5)"
              : "0 6px 16px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, pb: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box
            sx={{
              background: theme.palette.mode === "dark" ? "#272727" : "#f0f0f0",
              p: 1,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
            }}
          >
            <Icon sx={{ color: theme.palette.primary.main, fontSize: 24 }} />
          </Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ color: theme.palette.text.primary }}
          >
            {course.title}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mb: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {course.description}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Chip
            label={course.level}
            size="small"
            sx={{
              bgcolor: theme.palette.mode === "dark" ? "#242424" : "#e0e0e0",
              color: theme.palette.mode === "dark" ? "#aaa" : "#555",
              fontSize: "0.7rem",
            }}
          />
          <Typography variant="caption" sx={{ color: theme.palette.text.disabled }}>
            {course.lessons} lessons
          </Typography>
        </Box>
      </CardContent>

      <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />

      <Box sx={{ px: 2, pb: 2 }}>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => onStartCourse(course)}
          sx={{
            textTransform: "none",
            fontWeight: 500,
            fontSize: "0.85rem",
            borderColor: theme.palette.mode === "dark" ? "#333" : "#ccc",
            color: theme.palette.text.primary,
            "&:hover": {
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(123, 91, 252, 0.2)"
                  : "rgba(123, 91, 252, 0.1)",
            },
          }}
        >
          Start course
        </Button>
      </Box>
    </Card>
  );
}