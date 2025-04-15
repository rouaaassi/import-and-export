import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Collapse
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Logo from './logo';
import MenuItems from './menuItems';
import { Link } from 'react-router-dom';
import PATH from '../../../routes/route';
import SignInModal from '../logIn/SignInModal';
import SignupModal from '../singUp/signupModal';

const pages = ['Home', 'Pages', 'Services', 'Contact Us'];

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Box position="static" sx={{ mt: 1, fontFamily: 'serif' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', gap: 2 }}>
          {/* Logo on the left */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Logo />
          </Box>

          {/* Menu items in the center (desktop) */}
          <Box
            sx={{
              flex: 2,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            <MenuItems pages={pages} />
          </Box>

          {/* Auth buttons on the right (desktop) */}
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: 2,
            }}
          >
            <SignInModal />
            <SignupModal />
          </Box>

          {/* Auth buttons and menu icon in the same line for small screens */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              gap: 2, // spacing between the buttons and menu icon
            }}
          >
            <SignInModal />
            <SignupModal />
            <IconButton onClick={toggleDrawer} sx={{ color: '#333' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={openMenu} onClose={toggleDrawer}>
        <List sx={{ width: 250, color: '#0118D8' }}>
          <ListItemButton component={Link} to={PATH.home} onClick={toggleDrawer}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton onClick={() => setPagesOpen(!pagesOpen)}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
            {pagesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={pagesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton component={Link} to={PATH.ContactUs} onClick={toggleDrawer} sx={{ pl: 4 }}>
                <ListItemText primary="About Us" />
              </ListItemButton>
              <ListItemButton component={Link} to={PATH.ContactUs} onClick={toggleDrawer} sx={{ pl: 4 }}>
                <ListItemText primary="Team" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => setServicesOpen(!servicesOpen)}>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {servicesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton component={Link} to={PATH.ContactUs} onClick={toggleDrawer} sx={{ pl: 4 }}>
                <ListItemText primary="Service 1" />
              </ListItemButton>
              <ListItemButton component={Link} to={PATH.ContactUs} onClick={toggleDrawer} sx={{ pl: 4 }}>
                <ListItemText primary="Service 2" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton component={Link} to={PATH.ContactUs} onClick={toggleDrawer}>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;
