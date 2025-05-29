import { Box, Typography, Stack } from "@mui/material";
import { FC, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const OurVision: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box sx={{ 
      px: { xs: 2, md: 6 }, 
      pt: 4, 
      pb: 2,
      bgcolor: "#F5F7FA"
    }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        spacing={4}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography sx={{ 
            color: '#0118D8', 
            fontWeight: 700, 
            fontSize: { xs: '24px', md: '28px' }, 
            mb: 1,
            textShadow: '0 4px 16px #bfcfff'
          }}>
            Introductory Video
          </Typography>
          <Typography sx={{ 
            color: '#0118D8', 
            fontWeight: 700, 
            fontSize: { xs: 18, md: 22 }, 
            mb: 0,
            textShadow: '0 2px 8px #e3e9f7'
          }}>
            Watch this video to learn more about:
          </Typography>
        </Box>
      </Stack>
      
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
      >
        <Box sx={{ 
          position: 'relative', 
          width: { xs: '100%', md: '60%' }, 
          aspectRatio: '16/9', 
          borderRadius: '24px', 
          overflow: 'hidden', 
          boxShadow: '0 20px 40px rgba(1, 24, 216, 0.15)',
          bgcolor: '#fff'
        }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              display: isPlaying ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#fff'
            }}
          >
            <Box
              component="img"
              src="/04.png"
              alt="Video Thumbnail"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </Box>

          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8tPnX7OPo0Q?autoplay=1&mute=1&loop=1&playlist=8tPnX7OPo0Q"
              title="Logistics and Shipping Process"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: "24px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: 'relative',
                zIndex: 2
              }}
            />
          ) : (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(1, 24, 216, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(1, 24, 216, 0.2)',
                  '& .play-button': {
                    transform: 'scale(1.1)',
                    boxShadow: '0 12px 32px rgba(1, 24, 216, 0.4)',
                  }
                }
              }}
              onClick={() => setIsPlaying(true)}
            >
              <Box 
                className="play-button"
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  bgcolor: "#0118D8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: '0 8px 24px rgba(1, 24, 216, 0.3)',
                  transition: "all 0.3s ease",
                }}
              >
                <PlayArrowIcon sx={{
                  color: "#fff",
                  fontSize: 40,
                  transition: "all 0.3s ease",
                }} />
              </Box>
            </Box>
          )}
        </Box>

        <Box sx={{ 
          flex: 1, 
          mt: { xs: 2, md: 0 }, 
          minWidth: 260,
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          <Typography sx={{ 
            color: '#A0A0A0', 
            fontSize: 15, 
            mb: 2,
            lineHeight: 1.7
          }}>
            Who We Are and How We Work
          </Typography>
          <Typography sx={{ 
            color: '#0118D8', 
            fontWeight: 700, 
            fontSize: 24, 
            mb: 1,
            textShadow: '0 4px 16px #bfcfff'
          }}>
            Our Vision:
          </Typography>
          <Typography sx={{ 
            color: '#A0A0A0', 
            fontSize: 15, 
            lineHeight: 1.7,
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#666',
              transform: 'translateX(10px)'
            }
          }}>
            Turning Challenges into Shipments<br />
            We believe every challenge is an opportunity. Our mission is to turn logistical obstacles<br/> 
            into fast and secure solutions that ensure your shipment is delivered efficiently.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default OurVision;