import React from 'react';
import { Button } from '@mui/material';

const SignupButton = ({ onClick }: { onClick: () => void }) => (
  <Button
    onClick={onClick}
    variant="outlined"
    sx={{
      borderRadius: '30px',
      borderColor: '#1108D8',
      borderWidth: '2px',
      borderStyle: 'solid',
      backgroundColor: '#ffffff',
      color: '#1108D8',
      px: 3,
      fontWeight: 'bold',
      textTransform: 'none',
    }}
  >
    Dashboard
  </Button>
);

export default SignupButton;
