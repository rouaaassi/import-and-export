import { Box, Button, Typography, Container } from "@mui/material";
import React, { FC } from "react";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Service: FC = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#F5F7FA", py: { xs: 6, md: 10 }, position: 'relative' }}>
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 6, md: 8 },
          alignItems: "center",
          justifyContent: "space-between",
          position: 'relative',
        }}>
          {/* Left Section - Text */}
          <Box sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            gap: 3,
            position: 'relative',
          }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
              <img src="/Location.png" alt="location icon" style={{ width: 44, height: 44 }} />
              <Typography sx={{ color: "#0118D8", fontWeight: 700, fontSize: { xs: 28, md: 40 }, lineHeight: "100%", textShadow: "0 4px 16px #bfcfff" }}>
                Service Centers in<br />Strategic
              </Typography>
            </Box>
            <Typography sx={{ fontSize: { xs: 16, md: 18 }, color: '#222', mb: 1 }}>
              We proudly operate service centers in several German and Syrian cities, allowing for faster, more efficient delivery and easier package handling.
            </Typography>
            <Typography sx={{ fontSize: { xs: 15, md: 17 }, color: '#444', mb: 2 }}>
              The smart deployment of service centers reduces distance and time, ensuring fast shipping and smooth delivery of parcels.
            </Typography>
            {/* Why us button - floating from the left */}
            <Box sx={{
              position: 'relative',
              width: '100%',
              minHeight: 140,
              mt: 2,
            }}>
              <Button
                sx={{
                  position: 'absolute',
                  left: { xs: 0, md: -70 },
                  top: { xs: 0, md: 30 },
                  width: { xs: 180, sm: 220, md: 260 },
                  height: { xs: 48, md: 60 },
                  textTransform: "none",
                  color: "#fff",
                  bgcolor: "#0118D8",
                  borderRadius: "50px",
                  fontSize: { xs: 18, md: 28 },
                  fontWeight: "bold",
                  boxShadow: "0 4px 15px rgba(1, 24, 216, 0.15)",
                  transition: "all 0.3s ease",
                  zIndex: 2,
                  '&:hover': {
                    bgcolor: "#0035cc",
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 20px rgba(1, 24, 216, 0.22)",
                  },
                }}
              >
                Why us?
              </Button>
              {/* Zigzag line and plane icon */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 160, sm: 200, md: 190 },
                  top: { xs: 24, md: 60 },
                  width: { xs: 340, sm: 520, md: 720 },
                  height: { xs: 140, md: 200 },
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                <svg width="100%" height="100%" style={{ position: 'absolute', left: 0, top: 0 }}>
                  <polyline
                    points="0,0 60,40 120,0 180,40 240,0 300,40 360,0 420,40 480,0 540,40 600,0 660,40 720,10"
                    fill="none"
                    stroke="#0118D8"
                    strokeWidth="3"
                    strokeDasharray="8,7"
                  />
                </svg>
                <FlightTakeoffIcon sx={{
                  position: 'absolute',
                  right: -18,
                  top: -18,
                  fontSize: 38,
                  color: '#0118D8',
                  bgcolor: '#fff',
                  borderRadius: '50%',
                  boxShadow: 2,
                  p: 0.5,
                }} />
              </Box>
            </Box>
          </Box>

          {/* Right Section - Map or Image */}
          <Box sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 4, md: 0 },
          }}>
            <Box
              component="img"
              src="/service.png"
              alt="Service centers map"
              sx={{
                width: { xs: "100%", sm: 400, md: 520 },
                height: "auto",
                borderRadius: 6,
                boxShadow: '0 8px 32px rgba(1,24,216,0.10)',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Service;
