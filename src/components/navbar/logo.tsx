import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Logo = () => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <img src="/logo.png" alt="Logo" style={{ width: '80px', height: '80px', marginRight: '1px' }} />
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="#"
      sx={{
        fontFamily: 'roboto',
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
    </Typography>
  </Box>
);

export default Logo;