import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  LinearProgress,
  Chip,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import TopicCard from "../components/TopicCard";
import { tsCourseData } from "../data/tsCourse.js"; 

export default function HTMLCoursePage({ onBack }) {
  const theme = useTheme();
  const completedTopics = tsCourseData.topics.filter(topic => topic.completed).length;
  const totalTopics = tsCourseData.topics.length;
  const progress = (completedTopics / totalTopics) * 100;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={onBack}
          sx={{
            textTransform: "none",
            color: "text.secondary",
            mb: 2,
            "&:hover": {
              bgcolor: "transparent",
              color: "primary.main",
            },
          }}
        >
          Back to Courses
        </Button>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "12px",
              bgcolor: theme.palette.mode === "dark" ? "#333" : "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WebAssetIcon sx={{ color: "primary.main", fontSize: 32 }} />
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {tsCourseData.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <Chip
                label={tsCourseData.level}
                size="small"
                sx={{
                  bgcolor: theme.palette.mode === "dark" ? "#242424" : "#e0e0e0",
                  color: theme.palette.text.secondary,
                }}
              />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {totalTopics} topics • {completedTopics} completed
              </Typography>
            </Box>
          </Box>
        </Box>
        
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          {tsCourseData.description}
        </Typography>
        
        {/* Progress */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" fontWeight={600}>
              Course Progress
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {Math.round(progress)}% Complete
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: theme.palette.mode === "dark" ? "#333" : "#f0f0f0",
              "& .MuiLinearProgress-bar": {
                borderRadius: 4,
              },
            }}
          />
        </Box>
      </Box>
      
      {/* Course Content - Full Width */}
      <Box sx={{ maxWidth: "100%", mx: "auto" }}>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
          Course Topics
        </Typography>
        
        {tsCourseData.topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </Box>
    </Container>
  );
}