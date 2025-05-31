import React, { FC } from "react";
import { IStaffCards } from "../../../../types/staff-cards";
import { Card, CardContent, Typography, Box } from "@mui/material";

const StaffCards: FC<IStaffCards> = ({ title, parcels, icon, bgcolor, color, border, textColor, percent }) => {
  return (
    <Card
      sx={{
        backgroundColor: bgcolor,
        color: color,
        borderRadius: '16px',
        border: border ? `1px solid ${border}` : 'none',
        height: '140px',
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        position: "relative",
        width: "280px",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        '&:hover': {
          transform: "translateY(-4px)",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)"
        }
      }}
    >
      <CardContent sx={{ p: 3, height: "100%" }}>
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
                fontWeight: 600, 
                fontSize: '16px',
                color: color,
                mb: 2
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
                  ml: 1,
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
              bottom: 24,
              right: 24,
              opacity: 0.8
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StaffCards;
