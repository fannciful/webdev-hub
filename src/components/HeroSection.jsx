import React from "react";
import {
    Container,
    Typography,
    Button,
    Box,
    Grid,
    useTheme,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

export default function HeroSection() {
    const theme = useTheme();
    const darkMode = theme.palette.mode === "dark";

    return (
        <Container maxWidth="lg" sx={{ py: 8, mb: 8 }}>
            <Box
                sx={{
                    textAlign: "center",
                    py: 6,
                    px: 4,
                    borderRadius: "24px",
                    bgcolor: darkMode ? "rgba(26, 26, 26, 0.8)" : "rgba(255, 255, 255, 0.8)",
                    border: darkMode ? "1px solid #333" : "1px solid #e0e0e0",
                    maxWidth: 800,
                    mx: "auto",
                }}
            >
                {/* Icon */}
                <Box
                    sx={{
                        mb: 3,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: 80,
                            height: 80,
                            borderRadius: "16px",
                            bgcolor: "primary.main",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CodeIcon sx={{ fontSize: 40, color: "white" }} />
                    </Box>
                </Box>

                {/* Title */}
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                        mb: 3,
                        fontSize: { xs: "2rem", md: "3rem" },
                    }}
                >
                    Web Dev{" "}
                    <Box component="span" sx={{ color: "primary.main" }}>
                        Learning Hub
                    </Box>
                </Typography>

                {/* Description */}
                <Typography
                    variant="h6"
                    sx={{
                        color: "text.secondary",
                        mb: 4,
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        lineHeight: 1.6,
                    }}
                >
                    A complete guide for front-end developers. Learn HTML, CSS, JavaScript,
                    React, and TypeScript with interactive tutorials and hands-on
                    examples.
                </Typography>

                {/* Buttons */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "center",
                        flexWrap: "wrap",
                        mb: 5,
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: "primary.main",
                            textTransform: "none",
                            fontWeight: 600,
                            fontSize: "1rem",
                            borderRadius: "12px",
                            px: 4,
                            py: 1.5,
                            "&:hover": {
                                bgcolor: "primary.dark",
                            },
                        }}
                    >
                        📚 Start study
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            textTransform: "none",
                            fontWeight: 600,
                            fontSize: "1rem",
                            borderRadius: "12px",
                            px: 4,
                            py: 1.5,
                            borderColor: darkMode ? "#444" : "#ccc",
                            color: "text.primary",
                            "&:hover": {
                                borderColor: "primary.main",
                                bgcolor: darkMode ? "rgba(123, 91, 252, 0.1)" : "rgba(123, 91, 252, 0.05)",
                            },
                        }}
                    >
                        View courses
                    </Button>
                </Box>

                {/* Stats */}
                <Grid container spacing={4} sx={{ justifyContent: "center" }}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{ color: "primary.main", mb: 1 }}
                            >
                                5+
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                technologies
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{ color: "primary.main", mb: 1 }}
                            >
                                100+
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                lessons
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{ color: "primary.main", mb: 1 }}
                            >
                                50+
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                practical tasks
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}