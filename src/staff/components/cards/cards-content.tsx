import React from "react";
import { Box } from "@mui/material";
import StaffCards from "./staff-cards";
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';
interface CardsContentProps {
  open: boolean;
}

const CardsContent = ({ open }: CardsContentProps) => {

    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: open
                        ? {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                            lg: "repeat(4, 1fr)",
                            xl: "repeat(4, 1fr)"
                        }
                        : {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)",
                            xl: "repeat(4, 1fr)"
                        },
                    gap: open ? 2.5 : 3.5,
                    p: open ? 1 : 0,
                    transition: 'all 0.3s',
                }}
            >
                {/* Date Card */}
                <Box>
                    <StaffCards
                        title="Total number of parcels today"
                        parcels= '3400'
                        icon={<TrendingUpSharpIcon sx={{ width: 32, height: 32, color: "#0118D8" }} />}
                        average= "12% increase from last month"
                        bgcolor="#fff"
                        color="#0E3056"
                        textColor="#0118D8"
                        border="#E3E8FF"
                    />
                </Box>

                {/* Total Parcels Card */}
                <Box>
                    <StaffCards
                        title="Number of parcels under delivery"
                        parcels={1400}
                        average= "Successfully delivered"
                        icon={<img src="/total.png" alt="Total" style={{ width: 32 }} />}
                        bgcolor="#11D09F"
                        color="#fff"
                        textColor="#fff"
                    />
                </Box>

                {/* Pending Parcels Card */}
                <Box>
                    <StaffCards
                        title="Number of parcels delivered today"
                        parcels={1400}
                        average= "Currently in transit"
                        percent="- 50%"
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
                        title="Number of parcels canceled"
                        parcels={1000}
                        average= "Total revenue"
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
