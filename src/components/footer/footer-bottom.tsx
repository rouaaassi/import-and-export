import React from 'react';
import { Box, Divider, Grid } from '@mui/material';
import Newsletter from './Newsletter';
import FooterLinks from './FooterLinks';
import ContactInfo from './ContactInfo';
import SocialIcons from './SocialIcons';
import Logo from '../navbar/logo';

const FooterBottom = () => {

  return (
    <Box sx={{ bgcolor: '#0118D8', color: 'white', pt: 8, pb: 4, px: { xs: 3, md: 10 } }}>
      {/* top section */}
      <Grid container spacing={4}>
        <Grid ><Newsletter /></Grid>
        <Grid ><FooterLinks /></Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

     {/* buttom section */}
      <Grid container spacing={2} alignItems="center">
        <Grid >
          <Box sx={{ '& .MuiTypography-root': { color: '#fff !important', filter: 'brightness(1.2)' } }}>
            <Logo isNavbar={false} />
          </Box>
        </Grid>
        <Grid><ContactInfo /></Grid>
        <Grid><SocialIcons position="bottom" /></Grid>
      </Grid>
    </Box>
  );
};

export default FooterBottom;
