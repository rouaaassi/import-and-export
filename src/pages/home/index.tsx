import { Box, Button, Typography, Container } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AboutSection from "../about";
import NavBar from "../../components/navbar/navbar";
import CustomerApp from "../customer-app";
import Footer from "../../components/footer/footer";
import Service from "../service-center";
import ServiceSection from './ServicesSection'
import OurVision from "./vision";

export default function Home() {
    return (
        <>
            <Box sx={{ 
                position: "relative", 
                width: "100%", 
                minHeight: "100vh",
                overflow: "hidden",
                bgcolor: "#F5F7FA"
            }}>
                <NavBar/>
                
                {/* Hero Background Image */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: { xs: "100%", lg: "60%" },
                        height: "100%",
                        zIndex: 0,
                        opacity: { xs: 0.2, lg: 1 },
                        '& img': {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }
                    }}
                >
                    <img
                        src="/hero.png"
                        alt="Hero Section"
                    />
                </Box>

                {/* Hero Content */}
                <Container maxWidth="xl">
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            display: "flex",
                            flexDirection: { xs: "column", lg: "row" },
                            alignItems: { xs: "center", lg: "flex-start" },
                            justifyContent: "space-between",
                            minHeight: "100vh",
                            pt: { xs: 20, lg: 25 },
                            pb: { xs: 10, lg: 15 },
                            px: { xs: 2, lg: 4 }
                        }}
                    >
                        {/* Left Content */}
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: "column", 
                            gap: { xs: 4, lg: 7 },
                            maxWidth: { xs: "100%", lg: "50%" },
                            textAlign: { xs: "center", lg: "left" }
                        }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontFamily: "Sansita, sans-serif",
                                    fontWeight: 700,
                                    color: "#0118D8",
                                    fontSize: { xs: "2.2rem", lg: "4rem" },
                                    lineHeight: 1.2,
                                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                Fast Furious Transport<br />
                                All Logistics One Platform
                            </Typography>

                            <Box sx={{ 
                                color: '#666',
                                fontSize: { xs: "1rem", lg: "1.1rem" },
                                lineHeight: 1.6
                            }}>
                                <Typography>
                                    Welcome to the control panel of the shipping and import system from Germany to Syria.
                                    This site is dedicated to managing operations, tracking shipments, and coordinating
                                    work teams from one centralized platform.
                                </Typography>
                            </Box>

                            <Box sx={{ 
                                display: "flex",
                                gap: { xs: 2, lg: 3 },
                                flexDirection: { xs: "column", sm: "row" },
                                justifyContent: { xs: "center", lg: "flex-start" },
                                width: "100%"
                            }}>
                                <Button
                                    sx={{
                                        borderRadius: '36px',
                                        textTransform: 'none',
                                        color: "#FFFFFF",
                                        bgcolor: '#0118D8',
                                        paddingX: { xs: 3, lg: 4 },
                                        paddingY: 1.5,
                                        fontWeight: 600,
                                        fontSize: { xs: "1rem", lg: "1.1rem" },
                                        display: "flex",
                                        alignItems: "center",
                                        minWidth: { xs: "100%", sm: "auto" },
                                        boxShadow: "0px 0px 12px #0118D8",
                                        transition: "all 0.3s ease",
                                        '&:hover': {
                                            backgroundColor: '#0035cc',
                                            boxShadow: "0px 0px 20px #0035cc",
                                            transform: "translateY(-2px)"
                                        },
                                    }}
                                    startIcon={<MiscellaneousServicesIcon />}
                                >
                                    Our Services
                                </Button>
                            </Box>
                        </Box>

                        {/* Right Content - Empty for now but can be used for additional content */}
                        <Box sx={{ 
                            display: { xs: "none", lg: "block" },
                            width: "40%"
                        }} />
                    </Box>
                </Container>
            </Box>

            <div id="about-section">
                <AboutSection />
            </div>
            <div>
                <CustomerApp/>
            </div>
            <Service/>
            <ServiceSection/>
            <OurVision/>
            <div><Footer/></div>
        </>
    );
}
