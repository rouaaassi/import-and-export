import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
  IconButton,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  LocationOn,
  Email,
  Phone,
} from '@mui/icons-material';
import Logo from '../navbar/logo';

const FooterButtom = () => {
  return (
    <Box sx={{ bgcolor: '#0118D8', color: 'white', pt: 8, pb: 4, px: { xs: 3, md: 10 } }}>
      <Grid container spacing={4}>
        <Grid>
          <Box sx={{ bgcolor: '#DDF1FF', borderRadius: 2, p: 3, color: '#000', mb: 3 }}>
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
              }}
            >
              Send Feedback →
            </Button>
            <Box sx={{ mt: 2, display: 'flex', gap: 2, color: '#0118D8' }}>
              <IconButton size="small"><Facebook /></IconButton>
              <IconButton size="small"><Instagram /></IconButton>
              <IconButton size="small"><Twitter /></IconButton>
              <IconButton size="small"><LinkedIn /></IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Pages
            </Typography>
            <Typography>  <span style={{ marginRight: 8 }}>»</span> Home</Typography>
            <Typography>  <span style={{ marginRight: 8 }}>»</span>About</Typography>
            <Typography>   <span style={{ marginRight: 8 }}>»</span>Services</Typography>
            <Typography>  <span style={{ marginRight: 8 }}>»</span> Services Center</Typography>
            <Typography>  <span style={{ marginRight: 8 }}>»</span> Services Features</Typography>
          </Box>
        </Grid>
        <Grid>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Link
            </Typography>
            <Typography> <span style={{ marginRight: 8 }}>»</span> Download App</Typography>
            <Typography> <span style={{ marginRight: 8 }}>»</span>Contact us</Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

      <Grid container spacing={2} alignItems="center">
        <Grid>
          <Box sx={{ 
            '& .MuiTypography-root': { 
              color: '#fff !important',
              filter: 'brightness(1.2)'
            }
          }}>
            <Logo />
          </Box>
        </Grid>
        <Grid>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: 3,
              fontSize: 14,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn fontSize="small" />
              <span>Syria - Damascus, Germany</span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email fontSize="small" />
              <span>info@yourcompany.com</span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone fontSize="small" />
              <span>+49 123 456 789 | +963 987 654 321</span>
            </Box>
          </Box>
        </Grid>
        <Grid>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
            <IconButton color="inherit"><Twitter /></IconButton>
            <IconButton color="inherit"><LinkedIn /></IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterButtom;
