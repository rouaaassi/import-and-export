import React from "react";
import SideBar from "../../../staff/components/sideBar/sideBar";
import { Box, Typography, Container, useTheme, useMediaQuery } from "@mui/material";
import Header from "../../../staff/components/header/Header";
import Greeting from "../../../staff/components/header/Greeting";
import CardsContent from "../../../staff/components/cards/cards-content";
import UserList from "../../../staff/components/users-list";
import CentersList from "../../../staff/components/centers/centers-list";
import TaskSection from "../../../staff/components/task-section/task";

export default function StaffDashboard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: "100vh",
                width: '100%',
                bgcolor: 'background.default'
            }}
        >
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: { xs: '100%', md: 'calc(100% - 240px)' },
                    overflow: 'auto'
                }}
            >
                {/* Header Section */}
                <Header />

                {/* Dashboard Content */}
                <Container
                    maxWidth="xl"
                    sx={{
                        py: { xs: 2, md: 3 },
                        px: { xs: 2, sm: 3, md: 4 }
                    }}
                >
                    {/* Greeting Section */}
                    <Box sx={{ mb: 4 }}>
                        <Greeting />
                    </Box>

                    {/* Overview Section */}
                    <Box sx={{ mb: 6 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                color: 'text.primary'
                            }}
                        >
                            Overview Cards
                        </Typography>

                        {/* Cards and Tasks Grid */}
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    lg: '2fr 1fr'
                                },
                                gap: 3,
                                alignItems: 'start'
                            }}
                        >
                            {/* Cards Content */}
                            <Box sx={{ width: '100%' }}>
                                <CardsContent />
                            </Box>

                            {/* Task Section */}
                            <Box
                                sx={{
                                    width: '100%',
                                    display: { xs: 'none', lg: 'block' }
                                }}
                            >
                                <TaskSection />
                            </Box>
                        </Box>
                    </Box>

                    {/* Users Section */}
                    <Box sx={{ mb: 6 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                color: 'text.primary'
                            }}
                        >
                            See all users
                        </Typography>
                        <Box
                            sx={{
                                overflowX: 'auto',
                                width: '100%',
                                '&::-webkit-scrollbar': {
                                    height: '8px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: '#f1f1f1',
                                    borderRadius: '4px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: '#888',
                                    borderRadius: '4px',
                                },
                            }}
                        >
                            <UserList />
                        </Box>
                    </Box>

                    {/* Centers Section */}
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                color: 'text.primary'
                            }}
                        >
                            Services Centers
                        </Typography>
                        <Box
                            sx={{
                                overflowX: 'auto',
                                width: '100%',
                                '&::-webkit-scrollbar': {
                                    height: '8px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: '#f1f1f1',
                                    borderRadius: '4px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: '#888',
                                    borderRadius: '4px',
                                },
                            }}
                        >
                            <CentersList />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}