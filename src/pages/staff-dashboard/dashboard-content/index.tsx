import React from "react";
import {
    Box,
    Typography,
    Container,
    Paper
} from "@mui/material";
import Greeting from "../../../staff/components/header/Greeting";
import CardsContent from "../../../staff/components/cards/cards-content";
import UserList from "../../../staff/components/users-list";
import CentersList from "../../../staff/components/centers/centers-list";
import LayoutDashboard from "../../../staff/components/sideBar/layouts/dashboardLayout/layout";

export default function StaffDashboard() {
    return (
        <LayoutDashboard>
            <Box sx={{ 
                display: "flex", 
                flexDirection: "column", 
                width: "100%",
                bgcolor: "#F5F7FA",
                minHeight: "100vh"
            }}>
                <Container
                    maxWidth="xl"
                    sx={{ 
                        py: 4,
                        position: "relative",
                        left: { xs: 0, md: "85px" },
                        px: { xs: 2, md: 4 }
                    }}
                >
                    {/* Header Section */}
                    <Box sx={{ mb: 4 }}>
                        <Greeting />
                    </Box>

                    {/* Main Content */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4
                        }}
                    >
                        {/* Top Section - Cards and Users */}
                        <Box sx={{ 
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
                            gap: 3
                        }}>
                            {/* Stats Cards Section */}
                            <Box>
                                <Paper 
                                    elevation={0}
                                    sx={{ 
                                        p: 3,
                                        borderRadius: 2,
                                        bgcolor: "white",
                                        height: "100%"
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: { xs: "1.25rem", md: "1.5rem" },
                                            color: "text.primary",
                                            mb: 3
                                        }}
                                    >
                                        Dashboard Overview
                                    </Typography>
                                    <CardsContent />
                                </Paper>
                            </Box>

                            {/* Users Section */}
                            <Box>
                                <Paper 
                                    elevation={0}
                                    sx={{ 
                                        p: 3,
                                        borderRadius: 2,
                                        bgcolor: "white",
                                        height: "100%"
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: { xs: "1.25rem", md: "1.5rem" },
                                            color: "text.primary",
                                            mb: 3
                                        }}
                                    >
                                        Recent Users
                                    </Typography>
                                    <UserList />
                                </Paper>
                            </Box>
                        </Box>

                        {/* Service Centers Section */}
                        <Paper 
                            elevation={0}
                            sx={{ 
                                p: 3,
                                borderRadius: 2,
                                bgcolor: "white"
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                                    color: "text.primary",
                                    mb: 3
                                }}
                            >
                                Service Centers
                            </Typography>
                            <Box
                                sx={{
                                    overflowX: "auto",
                                    width: "100%",
                                    "&::-webkit-scrollbar": {
                                        height: "8px"
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        background: "#f1f1f1",
                                        borderRadius: "4px"
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        background: "#888",
                                        borderRadius: "4px"
                                    }
                                }}
                            >
                                <CentersList />
                            </Box>
                        </Paper>
                    </Box>
                </Container>
            </Box>
        </LayoutDashboard>
    );
}
