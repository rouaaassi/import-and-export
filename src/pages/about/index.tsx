import { Box, Button, Typography, Container } from "@mui/material";
import React from "react";
import { features } from "../../constants/about_features";

export default function AboutSection() {
    return (
        <Box
            id="about-section"
            sx={{
                width: "100%",
                minHeight: "100vh",
                position: "relative",
                bgcolor: "#F5F7FA",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                py: { xs: 8, md: 12 }
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{ 
                    position: 'relative',
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' }, 
                    gap: 4, 
                    alignItems: 'center' 
                }}>
                    {/* Left Section - Content */}
                    <Box sx={{ 
                        width: { xs: '100%', md: '50%' },
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <Box
                            sx={{
                                position: "relative",
                                bgcolor: "#fff",
                                borderRadius: "30px",
                                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                                padding: { xs: 4, md: 6 },
                                display: "flex",
                                flexDirection: "column",
                                gap: 4,
                                transition: "all 0.5s ease",
                                "&:hover": {
                                    boxShadow: "0 15px 50px rgba(0, 0, 0, 0.15)",
                                    transform: "translateY(-5px)",
                                },
                            }}
                        >
                            <Button
                                sx={{
                                    width: { xs: "200px", md: "200px" },
                                    height: { xs: "60px", md: "60px" },
                                    textTransform: "none",
                                    color: "#fff",
                                    bgcolor: "#0118D8",
                                    borderRadius: "50px",
                                    fontSize: { xs: "24px", md: "32px" },
                                    fontWeight: "bold",
                                    position: "absolute",
                                    top: { xs: "-30px", md: "-40px" },
                                    left: { xs: "20px", md: "30px" },
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 4px 15px rgba(1, 24, 216, 0.3)",
                                    "&:hover": {
                                        bgcolor: "#0035cc",
                                        transform: "scale(1.05)",
                                        boxShadow: "0 6px 20px rgba(1, 24, 216, 0.4)",
                                    },
                                }}
                            >
                                About us
                            </Button>

                            <Typography
                                sx={{
                                    color: "#1E1927",
                                    fontSize: { xs: "16px", md: "20px" },
                                    lineHeight: 1.8,
                                    fontWeight: 500,
                                    mt: { xs: 8, md: 10 },
                                    maxWidth: "90%",
                                }}
                            >
                                Streamlined Solutions for Seamless Deliveries.<br />
                                We provide advanced logistics solutions to make the<br />
                                shipping process from Germany to Syria easier and more efficient.
                                Through our smart system,
                            </Typography>

                            <Box sx={{ 
                                display: 'grid', 
                                gridTemplateColumns: { xs: '1fr 1fr' },
                                gap: 2,
                                mt: 2 
                            }}>
                                {features.map((feature, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            p: 2,
                                            borderRadius: "15px",
                                            bgcolor: "#F8F9FF",
                                            height: "100%",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-5px)",
                                                boxShadow: "0 5px 15px rgba(1, 24, 216, 0.1)",
                                            },
                                        }}
                                    >
                                        {feature.icon}
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                fontSize: "18px",
                                                fontWeight: "bold",
                                                color: "#0118D8",
                                            }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                mt: 0.5,
                                                fontSize: "14px",
                                                color: "#666",
                                            }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>

                    {/* Right Section - Image */}
                    <Box sx={{ 
                        width: { xs: '100%', md: '60%' },
                        position: 'relative',
                        zIndex: 1,
                        ml: { md: -28 }
                    }}>
                        <Box
                            component="img"
                            src="/01.png"
                            alt="About Us"
                            sx={{
                                width: "100%",
                                height: "auto",
                                maxHeight: { xs: "600px", md: "600px" },
                                objectFit: "contain",
                                transition: "all 0.5s ease",
                                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
                                transform: "scale(1.02)",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.3))",
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
