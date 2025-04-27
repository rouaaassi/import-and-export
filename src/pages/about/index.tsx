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
                    width: { xs: "90%", md: "50%" },
                    height: "50vh",
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                    boxShadow: "10px 0px 30px rgba(0, 0, 0, 0.1)",
                    padding: "60px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    zIndex: 2,
                    transition: "box-shadow 0.5s ease",
                    "&:hover": {
                        boxShadow: "20px 0px 40px rgba(0, 0, 0, 0.2)",
                    },
                }}
            >
                <Button
                    sx={{
                        width: "250px",
                        height: "80px",
                        textTransform: "none",
                        color: "#fff",
                        bgcolor: "#0118D8",
                        borderRadius: "50px",
                        fontSize: "28px",
                        fontWeight: "bold",
                        position: "absolute",
                        top: "20px",
                        left: "-50px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            bgcolor: "#0035cc",
                            transform: "scale(1.05)",
                        },
                    }}
                >
                    About us
                </Button>

                <Typography
                    sx={{
                        color: "#1E1927",
                        fontSize: "20px",
                        lineHeight: "1.6",
                        fontWeight: 500,
                        marginTop: "100px",
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
                    left: { xs: "40%", md: "35%" },
                    bottom: "5%",
                    width: { xs: "250px", md: "800px" },
                    height: { xs: "300px", md: "450px" },
                    zIndex: 1,
                    transition: "all 0.5s ease",
                    "&:hover": {
                        transform: "scale(1.05) rotate(2deg)",
                    },
                }}
            />
        </Box>
    );
}
