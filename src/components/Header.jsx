import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Header({ darkMode, toggleTheme }) {
  return (
    <AppBar position="static" color="background" sx={{ bgcolor: "background.paper" }}>
      <Toolbar
        sx={{
          maxWidth: 1200,
          mx: "auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Логотип */}
        <Box sx={{ flex: "0 0 auto" }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            WebDev Hub
          </Typography>
        </Box>

        {/* Навігація по центру */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            gap: 3,
          }}
        >
          {["Main", "Courses", "Resources", "About"].map((text) => (
            <Button
              key={text}
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "0.9rem",
                p: 0,
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => {
                if (text === "Courses") {
                  document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {text}
            </Button>

          ))}
        </Box>

        {/* Перемикач теми */}
        <IconButton
          onClick={toggleTheme}
          color="inherit"
          sx={{ mr: 2 }}
          aria-label="toggle theme"
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {/* Кнопка Start справа */}
        <Box sx={{ flex: "0 0 auto", display: { xs: "none", sm: "block" } }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.main",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.9rem",
              borderRadius: "8px",
              px: 3,
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Start
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}