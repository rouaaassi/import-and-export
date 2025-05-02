
import React, { FC } from "react";
import { IStaffCards } from "../../../../types/staff-cards";
import { Card, CardContent, Typography, Box } from "@mui/material";

const StaffCards: FC<IStaffCards> = ({ title, parcels, icon, bgcolor, color, border, textColor, percent }) => {
  return (
    <Card
      sx={{
        backgroundColor: bgcolor,
        color: color,
        borderRadius: '20px',
        border: border ? `1px solid ${border}` : 'none',
        height: '131px',
        boxShadow: "none",
        position: "relative",
        width:"254px",
        pl:3
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize:'18px' }}>
              {title}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: textColor,position: "absolute", bottom: 10, right: 10  }}>
              {parcels}<span style={{fontSize:'14px'}}>Parcels</span>  {percent && `- ${percent}`}
            </Typography>
        <Box sx={{ position: "absolute", bottom: 10, left: 10 }}>
          {icon}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StaffCards;
