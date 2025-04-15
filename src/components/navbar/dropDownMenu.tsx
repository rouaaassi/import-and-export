import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface DropdownMenuProps {
  items: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => (
  <Box
    className="dropdown"
    sx={{
      position: 'absolute',
      top: '100%',
      left: 0,
      backgroundColor: 'rgba(58, 34, 181, 0.2)',
      backdropFilter: 'blur(8px)',
      color: '#ffffff',
      minWidth: '150px',
      zIndex: 10,
      borderRadius: '5px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      padding: '8px 0',
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(10px)',
      transition: 'all 0.3s ease-in-out',
      fontFamily: 'cursive',
    }}
  >
    {items.map((item: string) => (
      <Typography
        key={item}
        sx={{
          padding: '8px 16px',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
          cursor: 'pointer',
        }}
      >
        {item}
      </Typography>
    ))}
  </Box>
);

export default DropdownMenu;
