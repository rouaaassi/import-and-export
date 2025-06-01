import React from 'react';
import { Box, Typography } from '@mui/material';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const FooterLinks = () => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      Pages
    </Typography>
    {[
      { label: 'Home', id: 'home' },
      { label: 'About', id: 'about-section' },
      { label: 'Services', id: 'services' },
      { label: 'Services Center', id: 'service-center' },
      { label: 'Download App', id: 'download-app' }
    ].map((item) => (
      <Typography
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        sx={{
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: '#DDF1FF',
            transform: 'translateX(10px)',
          }
        }}
      >
        <span style={{ marginRight: 8 }}>»</span> {item.label}
      </Typography>
    ))}
  </Box>
);

export default FooterLinks;
