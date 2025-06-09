import React, { useState } from "react";
import {
    Box,
    Typography,
    Container,
    Paper,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import Greeting from "../../../staff/components/header/Greeting";
import CardsContent from "../../../staff/components/cards/cards-content";
import LayoutDashboard from "../../../staff/components/sideBar/layouts/dashboardLayout/layout";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CustomerRating from '../../../staff/components/customer_rate'
import QuickAction from "../../../staff/components/quick_action";

interface StaffDashboardProps {
  setDarkMode: (val: boolean) => void;
  darkMode: boolean;
}

export default function StaffDashboard({ setDarkMode, darkMode }: StaffDashboardProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [open, setOpen] = useState(false);
    const today = new Date().toLocaleDateString();
    return (
        <LayoutDashboard setDarkMode={setDarkMode} darkMode={darkMode}>
            <Box sx={{ 
                display: "flex", 
                flexDirection: "column", 
                width: "90%",
                bgcolor: 'background.default',
                minHeight: "80vh"
            }}>
                <Container
                    maxWidth="xl"
                    sx={{ 
                        py: 4,
                        position: "relative",
                        left: { xs: 45, md: "85px" },
                        px: { xs: 2},
                        bgcolor: 'background.default'
                    }}
                >
                    {/* Header Section with Quick Actions */}
                    <Box sx={{ mb: 1, bgcolor: 'background.default' }}>
                        <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            mb: 1,
                            bgcolor: 'background.default'
                        }}>
                            <Greeting />
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
                                <CalendarMonthIcon sx={{ color: 'text.secondary', fontSize: 22 }} />
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                                    {today}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Main Content */}
                    <Grid container spacing={3}>
                        {/* Left Column */}
                        <Grid>
                            {/* Dashboard Overview */}
                            <Paper 
                                elevation={0}
                                sx={{ 
                                    borderRadius: 2,
                                    bgcolor: 'background.default',
                                    mb: 3 , 
                                    width :'100%'
                                }}
                            >
                                <Box sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center',
                                    mb: 3,
                                    bgcolor: 'background.default'
                                }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: { xs: "1.25rem", md: "1.5rem" },
                                            color: "text.primary"
                                        }}
                                    >
                                        Dashboard Overview
                                    </Typography>
                                </Box>
                                <CardsContent open={open} />
                            </Paper>
                            <Box sx={{display:'flex',flexDirection:{xs:'column', md :'row'} , gap:3,width:'100%'}}>
                            <CustomerRating/>
                        <QuickAction/></Box>
                           
                        </Grid>                       
                    </Grid>
                </Container>
            </Box>
        </LayoutDashboard>
    );
}


