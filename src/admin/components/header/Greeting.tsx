import { Typography } from "@mui/material";
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
    <>
      {/* TODO: need to Authentication  */}
      <Typography sx={{ color: "#B0B8C1", fontWeight: 900 }}>
          {getGreeting()} user name
      </Typography>
    </>
  );
}
