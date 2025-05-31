import React from "react";
import { Box } from "@mui/material";
import StaffCards from "./staff-cards";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const CardsContent = () => {
    const getCurrentDate = () => {
        return new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ 
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                gap: 3
            }}>
                {/* Date Card */}
                <Box>
                    <StaffCards
                        title="Current Date"
                        parcels={getCurrentDate()}
                        icon={<CalendarMonthIcon sx={{ width: 32, height: 32, color: "#0118D8" }} />}
                        bgcolor="#fff"
                        color="#0E3056"
                        textColor="#0118D8"
                        border="#E3E8FF"
                    />
                </Box>

                {/* Total Parcels Card */}
                <Box>
                    <StaffCards
                        title="Total Parcels Today"
                        parcels={3400}
                        icon={<img src="/total.png" alt="Total" style={{ width: 32 }} />}
                        bgcolor="#11D09F"
                        color="#fff"
                        textColor="#fff"
                    />
                </Box>

                {/* Pending Parcels Card */}
                <Box>
                    <StaffCards
                        title="Under Delivery"
                        parcels={1400}
                        percent="50%"
                        icon={<img src="/under.png" alt="Under Delivery" style={{ width: 32 }} />}
                        bgcolor="#fff"
                        color="#0E3056"
                        textColor="#014BDB"
                        border="#A6C5FF"
                    />
                </Box>

                {/* Delivered Parcels Card */}
                <Box>
                    <StaffCards
                        title="Delivered Today"
                        parcels={1000}
                        icon={<img src="/done.png" alt="Delivered" style={{ width: 32 }} />}
                        bgcolor="#fff"
                        color="#000"
                        textColor="#D10000"
                        border="#FFB3B3"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default CardsContent;
