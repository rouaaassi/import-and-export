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
      <Typography sx={{ color: "#000", fontWeight: 700, fontSize: "30px", pl: 3, lineHeight: "100%", fontFamily: 'unset' }}>
        {getGreeting()} ,user name
      </Typography>
      <Typography sx={{ color: '#A6A8AA', pl: 3, pt: 1, fontFamily: 'unset', fontWeight: 400 ,fontSize:'15px'}}>Here is a quick overview you can browse through.</Typography>
    </>
  );
}
