import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import DropdownMenu from './dropDownMenu';
import PATH from '../../../routes/route';

const dropdownItems: Record<string, string[]> = {
  Pages: ['About', 'Our Team', 'Pricing Plans'],
  Services: ['Service', 'Service Details'],
};

const directLinks: Record<string, string> = {
  Home: PATH.home,
  'Contact Us': PATH.ContactUs,
};

interface MenuItemsProps {
  pages: string[];
}

const MenuItems:FC<MenuItemsProps> = ({ pages }) => (
  <Box
    sx={{
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      gap: 3,
      fontFamily: 'roboto',
    }}
  >
    {pages.map((page: string) => (
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
              color: '#333333',
              display: 'flex',
              alignItems: 'center',
              '&:hover': { color: '#555555', background: 'transparent' },
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '14px',
            }}
          >
            {page}
          </Button>
        ) : (
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: '#333333',
              display: 'flex',
              alignItems: 'center',
              '&:hover': { color: '#555555', background: 'transparent' },
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '14px',
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

export default MenuItems;
