import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';
import PATH from '../../../routes/route';


type LogoProps = {
  isNavbar?: boolean;
};

const getRandomColor = () => {
  const colors = ['#0118D8'];
  return colors[Math.floor(Math.random() * colors.length)];
};
type colorProps = {
  color?: string;
};

const Logo = ({ isNavbar=true}:LogoProps) => {

  return (
    <Box 
      component={Link} 
      to={PATH.home}
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        textDecoration: 'none',
        gap: 1,
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)'
        }
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // bgcolor: '#0118D8',
        borderRadius: '12px',
        // boxShadow: '0 4px 12px rgba(1, 24, 216, 0.2)'
      }}>
        {/* <LocalShippingIcon sx={{ 
          color: '#fff',
          fontSize: 32,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
        }} /> */}
        <img src={isNavbar?'/logo22.png':'/finall.png' }alt ='logo' width={52} height={42} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Sansita, sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            lineHeight: 1,
            letterSpacing: '0.5px',
          }}
        >
          Express Syria
        </Typography>
      </Box>
    </Box>
  );
};

export default Logo;
