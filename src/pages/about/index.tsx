import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function AboutSection() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                position: "relative",
                bgcolor: "#F5F7FA",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    left: 0,
                    bgcolor: "#fff",
                    width: { xs: "95%", md: "65%" },
                    height: "60vh",
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    boxShadow: "15px 0px 40px rgba(0, 0, 0, 0.15)",
                    padding: { xs: "40px", md: "80px" },
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    zIndex: 2,
                    transition: "all 0.5s ease",
                    "&:hover": {
                        boxShadow: "25px 0px 50px rgba(0, 0, 0, 0.25)",
                        transform: "translateX(10px)",
                    },
                }}
            >
                <Button
                    sx={{
                        width: "280px",
                        height: "90px",
                        textTransform: "none",
                        color: "#fff",
                        bgcolor: "#0118D8",
                        borderRadius: "50px",
                        fontSize: "32px",
                        fontWeight: "bold",
                        position: "absolute",
                        top: "30px",
                        left: "-60px",
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
                        fontSize: { xs: "18px", md: "24px" },
                        lineHeight: 1.8,
                        fontWeight: 500,
                        marginTop: "120px",
                        maxWidth: "90%",
                    }}
                >
                    Streamlined Solutions for Seamless Deliveries.<br />
                    We provide advanced logistics solutions to make the<br />
                    shipping process from Germany to Syria easier and more efficient.
                    Through our smart system,
                </Typography>
            </Box>

            <Box
                component="img"
                src="/about.png"
                alt="About Us"
                sx={{
                    position: "absolute",
                    left: { xs: "35%", md: "30%" },
                    bottom: "5%",
                    width: { xs: "300px", md: "900px" },
                    height: { xs: "350px", md: "500px" },
                    zIndex: 1,
                    transition: "all 0.5s ease",
                    objectFit: "contain",
                    imageRendering: "high-quality",
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2)) brightness(1.05) contrast(1.1)",
                    transform: "scale(1.02)",
                    "&:hover": {
                        transform: "scale(1.07) rotate(2deg)",
                        filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.15)",
                    },
                }}
            />
        </Box>
    );
}
