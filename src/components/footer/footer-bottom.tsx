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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ bgcolor: '#0118D8', color: 'white', pt: 8, pb: 4, px: { xs: 3, md: 10 } }}>
      <Grid container spacing={4}>
        <Grid>
          <Box sx={{ 
            bgcolor: '#DDF1FF', 
            borderRadius: 2, 
            p: 3, 
            color: '#000', 
            mb: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
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
                  transform: 'scale(1.05)'
                }
              }}
            >
              Send Feedback →
            </Button>
            <Box sx={{ mt: 2, display: 'flex', gap: 2, color: '#0118D8' }}>
              <IconButton 
                size="small" 
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': { transform: 'scale(1.2)' }
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                size="small"
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': { transform: 'scale(1.2)' }
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton 
                size="small"
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': { transform: 'scale(1.2)' }
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                size="small"
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': { transform: 'scale(1.2)' }
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Pages
            </Typography>
            <Typography 
              onClick={() => scrollToSection('home')}
              sx={{ 
                cursor: 'pointer', 
                transition: 'all 0.3s ease',
                '&:hover': { 
                  color: '#DDF1FF',
                  transform: 'translateX(10px)'
                }
              }}
            >
              <span style={{ marginRight: 8 }}>»</span> Home
            </Typography>
            <Typography 
              onClick={() => scrollToSection('about-section')}
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  color: '#DDF1FF',
                  transform: 'translateX(10px)'
                }
              }}
            >
              <span style={{ marginRight: 8 }}>»</span> About
            </Typography>
            <Typography 
              onClick={() => scrollToSection('services')}
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  color: '#DDF1FF',
                  transform: 'translateX(10px)'
                }
              }}
            >
              <span style={{ marginRight: 8 }}>»</span> Services
            </Typography>
            <Typography 
              onClick={() => scrollToSection('service-center')}
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  color: '#DDF1FF',
                  transform: 'translateX(10px)'
                }
              }}
            >
              <span style={{ marginRight: 8 }}>»</span> Services Center
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Link
            </Typography>
            <Typography 
              onClick={() => scrollToSection('download-app')}
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  color: '#DDF1FF',
                  transform: 'translateX(10px)'
                }
              }}
            >
              <span style={{ marginRight: 8 }}>»</span> Download App
            </Typography>
            <Typography 
              onClick={() => scrollToSection('contact-us')}
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  color: '#DDF1FF',
                  transform: 'translateX(10px)'
                }
              }}
            >
              <span style={{ marginRight: 8 }}>»</span> Contact us
            </Typography>
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
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': { 
                color: '#DDF1FF',
                transform: 'translateX(5px)'
              }
            }}>
              <LocationOn fontSize="small" />
              <span>Syria - Damascus, Germany</span>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': { 
                color: '#DDF1FF',
                transform: 'translateX(5px)'
              }
            }}>
              <Email fontSize="small" />
              <span>info@yourcompany.com</span>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': { 
                color: '#DDF1FF',
                transform: 'translateX(5px)'
              }
            }}>
              <Phone fontSize="small" />
              <span>+49 123 456 789 | +963 987 654 321</span>
            </Box>
          </Box>
        </Grid>
        <Grid>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton 
              color="inherit"
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'scale(1.2)',
                  color: '#DDF1FF'
                }
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton 
              color="inherit"
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'scale(1.2)',
                  color: '#DDF1FF'
                }
              }}
            >
              <Instagram />
            </IconButton>
            <IconButton 
              color="inherit"
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'scale(1.2)',
                  color: '#DDF1FF'
                }
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton 
              color="inherit"
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'scale(1.2)',
                  color: '#DDF1FF'
                }
              }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterButtom;
