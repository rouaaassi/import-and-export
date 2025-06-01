import React from 'react';
import { Box } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const items = [
  { icon: <LocationOn fontSize="small" />, text: 'Syria - Damascus, Germany' },
  { icon: <Email fontSize="small" />, text: 'info@ُExpress.com' },
  { icon: <Phone fontSize="small" />, text: '+49 123 456 789 | +963 987 654 321' },
];

const ContactInfo = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'flex-start', sm: 'center' },
    gap: 3,
    fontSize: 14,
  }}>
    {items.map(({ icon, text }, i) => (
      <Box
        key={i}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: '#DDF1FF',
            transform: 'translateX(5px)'
          }
        }}
      >
        {icon}
        <span>{text}</span>
      </Box>
    ))}
  </Box>
);

export default ContactInfo;
