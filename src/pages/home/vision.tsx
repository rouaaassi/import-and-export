import { Box, Typography, Stack } from "@mui/material";
import { FC } from "react";

const OurVision: FC = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, pt: 4, pb: 2 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography sx={{ color: '#0118D8', fontWeight: 700, fontSize: { xs: '24px', md: '28px' }, mb: 0 }}>
            Introductory Video
          </Typography>
          <Typography sx={{ color: '#0118D8', fontWeight: 700, fontSize: { xs: 18, md: 22 }, mb: 0 }}>
            Watch this video to learn more about:
          </Typography>
        </Box>
      </Stack>
      <Stack sx={{ mb: 10 , px:5 }} direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
        <Box sx={{ position: 'relative', minWidth: 340, maxWidth: 400, width: { xs: '100%', md: 400 }, aspectRatio: '16/9', borderRadius: 5, overflow: 'hidden', boxShadow: 3 }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/2Xc9gXyf2G4"
            title="Live Stream - Import & Export"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: 20, width: '100%', height: '100%' }}
          />
        </Box>
        <Box sx={{ flex: 1, mt: { xs: 2, md: 0 }, minWidth: 260 }}>
          <Typography sx={{ color: '#A0A0A0', fontSize: 15, mb: 12 }}>
            Who We Are and How We Work  Introductory Video Link
          </Typography>
          <Typography sx={{ color: '#0118D8', fontWeight: 700, fontSize: 24, mb: 1 }}>
            Our Vision:
          </Typography>
          <Typography sx={{ color: '#A0A0A0', fontSize: 15, lineHeight: 1.7 }}>
            Turning Challenges into Shipments<br />
            We believe every challenge is an opportunity. Our mission is to turn logistical obstacles<br/> into fast and secure solutions that ensure your shipment is delivered efficiently.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default OurVision;