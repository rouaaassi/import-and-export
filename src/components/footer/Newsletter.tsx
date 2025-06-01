import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
// import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Newsletter = () => (
  <Box sx={{
    bgcolor: '#DDF1FF',
    borderRadius: 2,
    p: 3,
    color: '#000',
    mb: 3,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    }
  }}>
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      Subscribe to Our Newsletter
    </Typography>
    <TextField
      placeholder="Enter Your email address"
      variant="standard"
      fullWidth
      InputProps={{ disableUnderline: true }}
      sx={{ mb: 2, borderBottom: '1px solid #999' }}
    />
    <Button
      variant="contained"
      sx={{
        bgcolor: '#0118D8',
        borderRadius: 5,
        px: 4,
        textTransform: 'none',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#0035cc',
          transform: 'scale(1.05)',
        }
      }}
    >
      Send Feedback →
    </Button>
  </Box>
);

export default Newsletter;
