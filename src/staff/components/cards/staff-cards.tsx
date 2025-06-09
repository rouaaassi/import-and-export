import React, { FC } from "react";
import { IStaffCards } from "../../../../types/staff-cards";
import { Card, CardContent, Typography, Box } from "@mui/material";

const StaffCards: FC<IStaffCards> = ({ title, parcels, icon, bgcolor, color, border,average, textColor, percent }) => {
  return (
    <Card
      sx={{
        backgroundColor: bgcolor,
        color: color,
        borderRadius: '16px',
        border: border ? `1px solid ${border}` : 'none',
        height: '160px',
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        position: "relative",
        width: "100%",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        '&:hover': {
          transform: "translateY(-4px)",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)"
        }
      }}
    >
      <CardContent sx={{  height: "100%" }}>
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="flex-start"
          height="100%"
        >
          <Box>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 800, 
                fontSize: '16px',
                color: color,
                mb: 1,
                fontFamily:'unset'
              
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                color: textColor,
                fontSize: '28px'
              }}
            >
              {parcels}
              <Typography 
                component="span" 
                sx={{ 
                  fontSize: '14px',
                  fontWeight: 500,
                  opacity: 0.8
                }}
              >
                Parcels
              </Typography>
              {percent && (
                <Typography 
                  component="span" 
                  sx={{ 
                    fontSize: '14px',
                    fontWeight: 500,
                    ml: 1,
                    color: textColor,
                    opacity: 0.8
                  }}
                >
                  {percent}
                </Typography>
              )}
            </Typography>
          </Box>
          <Box 
            sx={{ 
              position: "absolute",
              bottom:45,
              right: 24,
              opacity: 0.8
            }}
          >
            {icon}
          </Box>
        </Box>
        <Box sx={{mb:3}}>
            <Typography sx={{color:"3333", fontSize:'12px'}}>{average}</Typography>
          </Box>
      </CardContent>
    </Card>
  );
};

export default StaffCards;
