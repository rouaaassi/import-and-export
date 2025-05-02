import React, { useState } from 'react';
import {
  Box, Container, Toolbar, IconButton, Drawer,
  List, ListItemButton, ListItemIcon, ListItemText, Collapse,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Logo from './logo';
import MenuItems from './menuItems';
import { Link } from 'react-router-dom';
import PATH from '../../../routes/route';
import SignInModal from '../logIn/SignInModal';
import SignupModal from '../singUp/signupModal';

const NavBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleDrawer = () => setOpenMenu(!openMenu);

  return (
    <Box position="fixed" sx={{ width: "100%", top: 0, zIndex: 1000 }}>  
        <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ justifyContent: 'space-between', gap: 2 }}>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <Logo />
        </Box>

        <Box sx={{ flex: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <MenuItems pages={['Home', 'About Us', 'Services', 'Customer App', 'Contact Us']} />
        </Box>

        <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 2 }}>
          <SignInModal />
          <SignupModal />
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 2 }}>
          <SignInModal />
          <SignupModal />
          <IconButton onClick={toggleDrawer} sx={{ color: '#333' }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </Container>

      <Drawer anchor="right" open={openMenu} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItemButton component={Link} to={PATH.home} onClick={toggleDrawer}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton onClick={() => setPagesOpen(!pagesOpen)}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="Contact Us" />
            {pagesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={pagesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to={PATH.ContactUs} onClick={toggleDrawer}>
                <ListItemText primary="Our Team" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to={PATH.ContactUs} onClick={toggleDrawer}>
                <ListItemText primary="Directed " />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => setServicesOpen(!servicesOpen)}>
            <ListItemIcon><BuildIcon /></ListItemIcon>
            <ListItemText primary="Services" />
            {servicesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to={PATH.ContactUs} onClick={toggleDrawer}>
                <ListItemText primary="Features" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to={PATH.ContactUs} onClick={toggleDrawer}>
                <ListItemText primary="Service Details" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton component={Link} to={PATH.ContactUs} onClick={toggleDrawer}>
            <ListItemIcon><ContactMailIcon /></ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
          <ListItemButton component={Link} to={PATH.dasboardstaff} onClick={toggleDrawer}>
            <ListItemIcon><ContactMailIcon /></ListItemIcon>
            <ListItemText primary="Customer App" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;
