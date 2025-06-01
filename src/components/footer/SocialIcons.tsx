import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

interface Props {
  position: 'top' | 'bottom';
}

const SocialIcons = ({ position }: Props) => (
  <Box sx={{ display: 'flex', gap: 2, color: position === 'top' ? '#0118D8' : '#fff' }}>
    {[Facebook, Instagram, Twitter, LinkedIn].map((Icon, index) => (
      <IconButton
        key={index}
        size="small"
        sx={{
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.2)',
            color: '#DDF1FF'
          }
        }}
      >
        <Icon />
      </IconButton>
    ))}
  </Box>
);

export default SocialIcons;
