import * as React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Logo from '../navbar/logo';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ 
      position: 'relative', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: 4
    }}>
      <Logo />
      <Box sx={{ 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
      }}>
        <CircularProgress 
          variant="determinate" 
          {...props} 
          sx={{
            color: '#0118D8',
            filter: 'drop-shadow(0 2px 4px rgba(1, 24, 216, 0.2))'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            sx={{ 
              color: '#0118D8',
              fontWeight: 600,
              fontSize: '14px'
            }}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          color: '#666',
          fontSize: '16px',
          fontWeight: 500,
          textAlign: 'center'
        }}
      >
        Loading your experience...
      </Typography>
    </Box>
  );
}

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#fff',
        zIndex: 9999
      }}
    >
      <CircularProgressWithLabel value={progress} />
    </Box>
  );
}
