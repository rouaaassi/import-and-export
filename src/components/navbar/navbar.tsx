import React, { FC, useState, useEffect } from 'react';
import {
  Box, Container, Toolbar, IconButton, Drawer,
  List, ListItemButton, ListItemIcon, ListItemText, Collapse,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';
import PhoneIcon from '@mui/icons-material/Phone';

import Logo from './logo';
import MenuItems from './menuItems';
import SignInModal from '../logIn/SignInModal';
import SignupModal from '../singUp/signupModal';

const NavBar: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setOpenMenu(!openMenu);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toggleDrawer();
    }
  };

  return (
    <Box 
      position="fixed" 
      sx={{ 
        width: "100%", 
        top: 0, 
        zIndex: 1000,
        transition: 'all 0.3s ease-in-out',
        bgcolor: scrolled ? '#fff' : 'transparent',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        minHeight: { xs: '64px', lg: '70px' }
      }}
    >  
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            justifyContent: 'space-between', 
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Logo />
          </Box>

          <Box sx={{ 
            flex: 2, 
            display: { xs: 'none', lg: 'flex' }, 
            justifyContent: 'center',
            gap: 4
          }}>
            <MenuItems pages={['Home', 'About Us', 'Services', 'Customer App', 'Contact Us']} scrolled={scrolled} />
          </Box>

          <Box sx={{ 
            flex: 1, 
            display: { xs: 'none', lg: 'flex' }, 
            justifyContent: 'flex-end', 
            gap: 2 
          }}>
            <SignInModal scrolled={scrolled} />
            <SignupModal scrolled={scrolled} />
          </Box>

          <Box sx={{ 
            display: { xs: 'flex', lg: 'none' }, 
            alignItems: 'center', 
            gap: 2 
          }}>
            <IconButton onClick={toggleDrawer} sx={{ color: '#333' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={openMenu}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
          },
        }}
      >
        <Box sx={{ 
          p: 2, 
          background: 'rgba(248, 249, 250, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 600, 
            color: '#333',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
          }}>
            Menu
          </Typography>
        </Box>

        <List sx={{ width: '100%', pt: 2 }}>
          <Box sx={{ 
            display: { xs: 'flex', lg: 'none' }, 
            flexDirection: 'column',
            gap: 1,
            px: 2,
            mb: 2
          }}>
            <SignInModal scrolled={scrolled} />
            <SignupModal scrolled={scrolled} />
          </Box>

          <ListItemButton 
            onClick={() => scrollToSection('home')}
            sx={{
              m: 1,
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              '&:hover': {
                background: 'rgba(248, 249, 250, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transform: 'translateY(-1px)',
                '& .MuiListItemIcon-root': {
                  color: '#1976d2',
                },
                '& .MuiListItemText-primary': {
                  color: '#1976d2',
                },
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Home" 
              primaryTypographyProps={{
                sx: { fontWeight: 500 }
              }}
            />
          </ListItemButton>

          <ListItemButton 
            onClick={() => scrollToSection('about-section')}
            sx={{
              m: 1,
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              '&:hover': {
                background: 'rgba(248, 249, 250, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transform: 'translateY(-1px)',
                '& .MuiListItemIcon-root': {
                  color: '#1976d2',
                },
                '& .MuiListItemText-primary': {
                  color: '#1976d2',
                },
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText 
              primary="About Us" 
              primaryTypographyProps={{
                sx: { fontWeight: 500 }
              }}
            />
          </ListItemButton>

          <ListItemButton 
            onClick={() => setServicesOpen(!servicesOpen)}
            sx={{
              m: 1,
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              '&:hover': {
                background: 'rgba(248, 249, 250, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transform: 'translateY(-1px)',
                '& .MuiListItemIcon-root': {
                  color: '#1976d2',
                },
                '& .MuiListItemText-primary': {
                  color: '#1976d2',
                },
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Services" 
              primaryTypographyProps={{
                sx: { fontWeight: 500 }
              }}
            />
            {servicesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton 
                sx={{ 
                  pl: 4,
                  m: 1,
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  '&:hover': {
                    background: 'rgba(248, 249, 250, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transform: 'translateY(-1px)',
                    '& .MuiListItemText-primary': {
                      color: '#1976d2',
                    },
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
                onClick={() => scrollToSection('service-center')}
              >
                <ListItemText 
                  primary="Service Center" 
                  primaryTypographyProps={{
                    sx: { fontWeight: 500 }
                  }}
                />
              </ListItemButton>
              <ListItemButton 
                sx={{ 
                  pl: 4,
                  m: 1,
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  '&:hover': {
                    background: 'rgba(248, 249, 250, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transform: 'translateY(-1px)',
                    '& .MuiListItemText-primary': {
                      color: '#1976d2',
                    },
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
                onClick={() => scrollToSection('services')}
              >
                <ListItemText 
                  primary="Service Features" 
                  primaryTypographyProps={{
                    sx: { fontWeight: 500 }
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton 
            onClick={() => scrollToSection('download-app')}
            sx={{
              m: 1,
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              '&:hover': {
                background: 'rgba(248, 249, 250, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transform: 'translateY(-1px)',
                '& .MuiListItemIcon-root': {
                  color: '#1976d2',
                },
                '& .MuiListItemText-primary': {
                  color: '#1976d2',
                },
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <DownloadIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Download App" 
              primaryTypographyProps={{
                sx: { fontWeight: 500 }
              }}
            />
          </ListItemButton>

          <ListItemButton 
            onClick={() => scrollToSection('footer')}
            sx={{
              m: 1,
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              '&:hover': {
                background: 'rgba(248, 249, 250, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transform: 'translateY(-1px)',
                '& .MuiListItemIcon-root': {
                  color: '#1976d2',
                },
                '& .MuiListItemText-primary': {
                  color: '#1976d2',
                },
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Contact Us" 
              primaryTypographyProps={{
                sx: { fontWeight: 500 }
              }}
            />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;
