import React, { FC, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DropdownMenu from './dropDownMenu';
import PATH from '../../../routes/route';

interface MenuItemsProps {
  pages: string[];
}

const dropdownItems: { [key: string]: string[] } = {
  Services: ['Features', 'Service Details'],
  'Contact Us': ['Our Team', 'Directed'],
};

const directLinks: { [key: string]: string } = {
  Home: PATH.home,
  'About Us': PATH.ContactUs,
  'Customer App': PATH.ContactUs,
};

const MenuItems: FC<MenuItemsProps> = ({ pages }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
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
          {directLinks[page] ? (
            <Button
              component={Link}
              to={directLinks[page]}
              sx={{
                color: scrolled
                  ? (page === 'Customer App' ? '#0118D8' : '#0118D8')
                  : (page === 'Customer App' ? '#fff' : '#333'),
                fontWeight: 'bold',
                fontSize: '16px',
                textTransform: 'none',
                transition: 'color 0.3s ease',
              }}
            >
              {page}
            </Button>
          ) : (
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: scrolled ? '#0118D8' : '#fff',
                fontWeight: 'bold',
                fontSize: '16px',
                textTransform: 'none',
                transition: 'color 0.3s ease',
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
