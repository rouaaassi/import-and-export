import { useState } from 'react';
import {
  Box,
  IconButton,
  Paper,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const ParcelTypeCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '30px',
        padding: '10px 16px',
        borderColor: '#BFE5FF',
        width: { xs: '100%', sm: '70%', md: '50%' },
      }}
    >
      <Box display="flex" alignItems="center" gap={1.5}>
        <LocalShippingIcon />
        <Box>
          <Typography sx={{ fontWeight: 'bold' }}>Cloths</Typography>
          <Typography sx={{ fontSize: '12px', color: '#777' }}>
            Winter clothes with socks and bags
          </Typography>
        </Box>
      </Box>

      <IconButton onClick={handleClick}>
        <ExpandMoreIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Documents</MenuItem>
        <MenuItem onClick={handleClose}>Electronics</MenuItem>
        <MenuItem onClick={handleClose}>Clothes</MenuItem>
        <MenuItem onClick={handleClose}>Groceries</MenuItem>
      </Menu>
    </Paper>
  );
};

export default ParcelTypeCard;
