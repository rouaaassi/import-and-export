import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion"; 
import PinDropIcon from '@mui/icons-material/PinDrop';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export default function Home() {
    return (
        <Box sx={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: '615px',
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            >
                <img
                    src="/heroSection.png"
                    alt="Hero Section"
                    style={{
                        width: "60%",
                        height: "100%",
                    }}
                />
            </Box>

            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "100%",
                    px: 8,
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: "column", gap: 7, fontFamily: "Sansita", fontWeight: 700 }}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="#0118D8"
                        sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    >
                        Fast Furious Transport<br />
                        All Logistics One Platform
                    </Typography>

                    <Box sx={{ color: '#B0B8C1' }}>
                        <Typography>
                            Welcome to the control panel of the shipping and import system from Germany to Syria.<br />
                            This site is dedicated to managing operations, tracking shipments, and coordinating<br />
                            work teams from one centralized platform.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'inline-flex',
                            gap: 2,
                            background: "#E6F0FF99",
                            borderRadius: "20px 30px",
                            paddingY: "18px",
                            paddingX: "10px",
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                            alignItems: "center",
                            width: "60%"
                        }}
                    >
                        <Button
                            sx={{
                                borderRadius: '36px',
                                textTransform: 'none',
                                color: '#B0B8C1',
                                bgcolor: '#FFFFFF',
                                paddingX: 3,
                                paddingY: 1.5,
                                fontWeight: 600,
                                fontSize: "16px",
                                display: "flex",
                                alignItems: "center",
                                minWidth: "auto",
                                boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
                                transition: "all 0.3s ease",
                                '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                    boxShadow: "0px 0px 20px #0118D8",
                                    color: '#0118D8',
                                },
                            }}
                            startIcon={<PinDropIcon sx={{ fill: "#0118D8" }} />}
                        >
                            Location
                        </Button>

                        <Button
                            sx={{
                                borderRadius: '36px',
                                textTransform: 'none',
                                color: "#FFFFFF",
                                bgcolor: '#0118D8',
                                paddingX: 3,
                                paddingY: 1.5,
                                fontWeight: 600,
                                fontSize: "16px",
                                display: "flex",
                                alignItems: "center",
                                minWidth: "auto",
                                boxShadow: "0px 0px 12px #0118D8",
                                transition: "all 0.3s ease",
                                '&:hover': {
                                    backgroundColor: '#0035cc',
                                    boxShadow: "0px 0px 20px #0035cc",
                                },
                            }}
                            startIcon={<MiscellaneousServicesIcon />}
                        >
                            Our Services
                        </Button>
                    </Box>
                </Box>

                <Box />
            </Box>
        </Box>
    );
}
