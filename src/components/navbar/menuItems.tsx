import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DropdownMenu from './dropDownMenu';
import PATH from '../../../routes/route';

interface MenuItemsProps {
  pages: string[];
  scrolled?: boolean;
}

const dropdownItems: { [key: string]: string[] } = {
  Services: ['Features', 'Service Details'],
  'Contact Us': ['Our Team', 'Directed'],
};

const directLinks: { [key: string]: string } = {
  Home: PATH.home,
  'Customer App': PATH.dasboardstaff,
};

const MenuItems: FC<MenuItemsProps> = ({ pages, scrolled = false }) => {
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 4,
      whiteSpace: 'nowrap'
    }}>
      {pages.map((page) => (
        <Box
          key={page}
          sx={{
            position: 'relative',
            '&:hover .dropdown': {
              opacity: 1,
              visibility: 'visible',
              transform: 'translateY(0)',
            },
          }}
        >
          {page === 'About Us' ? (
            <Button
              onClick={() => handleScrollToSection('about-section')}
              sx={{
                color: scrolled ? '#0118D8' : '#333',
                fontWeight: 'bold',
                fontSize: '16px',
                textTransform: 'none',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap',
                minWidth: 'auto',
                px: 1
              }}
            >
              {page}
            </Button>
          ) : directLinks[page] ? (
            <Button
              component={Link}
              to={directLinks[page]}
              sx={{
                color: scrolled ? '#0118D8' : '#333',
                fontWeight: 'bold',
                fontSize: '16px',
                textTransform: 'none',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap',
                minWidth: 'auto',
                px: 1
              }}
            >
              {page}
            </Button>
          ) : (
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: scrolled ? '#0118D8' : '#333',
                fontWeight: 'bold',
                fontSize: '16px',
                textTransform: 'none',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap',
                minWidth: 'auto',
                px: 1
              }}
            >
              {page}
            </Button>
          )}

          {dropdownItems[page] && <DropdownMenu items={dropdownItems[page]} />}
        </Box>
      ))}
    </Box>
  );
};

export default MenuItems;
