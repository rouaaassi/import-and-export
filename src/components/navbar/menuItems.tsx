import React, { FC } from 'react';
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
  'About Us' : PATH.ContactUs,
  'Customer App' : PATH.ContactUs,
};

const MenuItems: FC<MenuItemsProps> = ({ pages }) => (
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
            sx={{ color : page === 'Customer App' ? '#fff' : "#333"
              , fontWeight: 'bold', fontSize: '16px', textTransform: 'none' }}
          >
            {page}
          </Button>
        ) : (
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ color: '#fff', fontWeight: 'bold', fontSize: '16px', textTransform: 'none' }}
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
