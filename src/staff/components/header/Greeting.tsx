import { Typography, Box } from "@mui/material";
import React from "react";

export default function Greeting() {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 17) {
      return "Good Evening";
    } else if (hour >= 12) {
      return "Good Afternoon";
    } else {
      return "Good Morning";
    }
  };

  return (
    <Box>
      <Typography 
        sx={{ 
          color: "#1A1A1A", 
          fontWeight: 700, 
          fontSize: { xs: "24px", md: "32px" },
          lineHeight: 1.2,
          mb: 1
        }}
      >
        {getGreeting()}, <span style={{ color: "#0118D8" }}>User Name</span>
      </Typography>
      <Typography 
        sx={{ 
          color: '#666666',
          fontSize: { xs: "14px", md: "16px" },
          lineHeight: 1.5,
          maxWidth: "600px"
        }}
      >
        Welcome back! Here's what's happening with your parcels today.
      </Typography>
    </Box>
  );
}
