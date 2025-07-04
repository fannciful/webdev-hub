import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Collapse,
  IconButton,
  useTheme,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function TopicCard({ topic }) {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, mb: 3 }}>
      <Card
        sx={{
          borderRadius: "12px",
          border: theme.palette.mode === "dark" ? "1px solid #333" : "1px solid #e0e0e0",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: theme.palette.mode === "dark" 
              ? "0 4px 12px rgba(0, 0, 0, 0.3)" 
              : "0 4px 12px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <CardContent sx={{ pb: 1 }}>
          <Box 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              cursor: "pointer" 
            }}
            onClick={handleExpandClick}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "8px",
                  bgcolor: topic.completed ? "success.main" : "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                {topic.completed ? (
                  <CheckCircleIcon />
                ) : (
                  <PlayCircleIcon />
                )}
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  {topic.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                  <Chip
                    label={topic.difficulty}
                    size="small"
                    sx={{
                      bgcolor: theme.palette.mode === "dark" ? "#242424" : "#f0f0f0",
                      color: theme.palette.text.secondary,
                      fontSize: "0.7rem",
                    }}
                  />
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    {topic.duration}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <IconButton
              sx={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </CardContent>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider sx={{ mx: 2 }} />
          <CardContent sx={{ pt: 2 }}>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              {topic.description}
            </Typography>
            
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
              Що будете вивчати:
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0, mb: 2 }}>
              {topic.learningPoints && topic.learningPoints.map((point, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 0.5 }}
                >
                  {point}
                </Typography>
              ))}
            </Box>
            
            {/* FIXED: Додано відображення теорії з правильним whitespace */}
            {topic.theory && Object.keys(topic.theory).length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
                  Теоретичний матеріал:
                </Typography>
                {Object.entries(topic.theory).map(([key, value], index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1, color: "primary.main" }}>
                      {key}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "text.secondary", 
                        pl: 2,
                        whiteSpace: "pre-line" // ← ЦЕ КЛЮЧОВЕ ВИПРАВЛЕННЯ!
                      }}
                    >
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
            
            {topic.codeExample && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                  Code Example:
                </Typography>
                <Box
                  sx={{
                    bgcolor: theme.palette.mode === "dark" ? "#1a1a1a" : "#f8f9fa",
                    p: 2,
                    borderRadius: "8px",
                    border: theme.palette.mode === "dark" ? "1px solid #333" : "1px solid #e0e0e0",
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                    overflow: "auto",
                    maxWidth: "100%",
                  }}
                >
                  <pre style={{ 
                    margin: 0, 
                    whiteSpace: "pre-wrap", 
                    wordBreak: "break-word" 
                  }}>
                    <code>{topic.codeExample}</code>
                  </pre>
                </Box>
              </Box>
            )}
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}