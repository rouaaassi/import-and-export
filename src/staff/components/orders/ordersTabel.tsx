/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import { Card, CardContent, Menu, MenuItem } from '@mui/material';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Checkbox, IconButton, Button, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PATH from '../../../../routes/route';
import { useNavigate } from 'react-router';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// TODO: fix this by fetching Data from API 
const orders = [
  { id: 'TR-2024-001', name: 'Ahmed Ali', center: 'Riyadh Center', destination: 'Jeddah', weight: '2.5 kg', date: '2024-01-15', status: 'Delivered' },
  { id: 'TR-2024-002', name: 'Sara Mohammed', center: 'Jeddah Center', destination: 'Dammam', weight: '1.8 kg', date: '2024-01-14', status: 'Delivered' },
  { id: 'TR-2024-003', name: 'Omar Hassan', center: 'Dammam Center', destination: 'Riyadh', weight: '3.2 kg', date: '2024-01-13', status: 'Pending' },
  { id: 'TR-2024-004', name: 'Fatima Abdullah', center: 'Mecca Center', destination: 'Medina', weight: '0.8 kg', date: '2024-01-12', status: 'Cancelled' },
  { id: 'TR-2024-005', name: 'Khalid Ibrahim', center: 'Medina Center', destination: 'Riyadh', weight: '4.1 kg', date: '2024-01-11', status: 'Delivered' },
];

const getStatusChip = (status: string) => {
  switch (status) {
    case 'Delivered':
      return <Chip label="Delivered" size="small" sx={{ bgcolor: '#E6F9ED', color: '#219653', fontWeight: 600 }} />;
    case 'Pending':
      return <Chip label="Pending" size="small" sx={{ bgcolor: '#FFF8E1', color: '#F2994A', fontWeight: 600 }} />;
    case 'In Transit':
      return <Chip label="In Transit" size="small" sx={{ bgcolor: '#E3F2FD', color: '#1976D2', fontWeight: 600 }} />;
    case 'Cancelled':
      return <Chip label="Cancelled" size="small" sx={{ bgcolor: '#FDEAEA', color: '#EB5757', fontWeight: 600 }} />;
    default:
      return <Chip label={status} size="small" />;
  }
};

const OrderTable: FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [menuRowId, setMenuRowId] = useState<string | null>(null);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleFilter = () => {
    if (selectedDate) {
      const filtered = orders.filter(order => order.date === selectedDate);
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders); 
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, rowId: string) => {
    setAnchorEl(event.currentTarget);
    setMenuRowId(rowId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRowId(null);
  };

  const navigate = useNavigate();

  return (
    <Card sx={{ 
      bgcolor: isDarkMode ? 'rgb(18, 24, 57)' : '#fff',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
      borderRadius: 2,
      width:'100%'
    }}>
      <CardContent>
        {/* Tabs & Filter */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 2, 
          color: isDarkMode ? '#A0AEC0' : 'text.secondary',
          fontSize: '14px',
          fontWeight: 600,
          alignItems: 'center',
          mb: 4,
          pl: { xs: 2, sm: 4 }
        }}>
          <Typography sx={{ 
            color: '#0118D8', 
            borderBottom: '2px solid #0118D8', 
            pb: 1, 
            cursor: 'pointer' 
          }}>
            All Orders
          </Typography>
          <Typography sx={{ cursor: 'pointer' }}>Delivered</Typography>
          <Typography sx={{ cursor: 'pointer' }}>Pending</Typography>
          <Typography sx={{ cursor: 'pointer' }}>Cancelled</Typography>

          <Box sx={{ 
            ml: 'auto', 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: 2 
          }}>
            <CalendarMonthIcon sx={{ color: 'success.main' }} />
            <TextField
              type="date"
              size="small"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              sx={{ 
                minWidth: '160px',
                '& .MuiInputBase-root': {
                  bgcolor: isDarkMode ? 'rgba(255,255,255,0.05)' : '#fff',
                  color: isDarkMode ? '#fff' : 'inherit'
                }
              }}
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<FilterListIcon />}
              onClick={handleFilter}
              sx={{ 
                textTransform: 'none', 
                bgcolor: '#0118D8',
                '&:hover': {
                  bgcolor: '#011188'
                }
              }}
            >
              Filter
            </Button>
          </Box>
        </Box>

        {/* Table */}
        <Table>
          <TableHead>
            <TableRow sx={{ 
              bgcolor: isDarkMode ? 'rgba(255,255,255,0.05)' : '#fff',
              borderBottom: '2px solid #E0E0E0'
            }}>
              <TableCell sx={{ fontWeight: 700, color: isDarkMode ? '#fff' : '#222', }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 700, color: isDarkMode ? '#fff' : '#222', }}>Customer Name</TableCell>
              <TableCell sx={{ fontWeight: 700, color: isDarkMode ? '#fff' : '#222', }}>Service Center</TableCell>
              <TableCell sx={{ fontWeight: 700, color: isDarkMode ? '#fff' : '#222', }}>Destination</TableCell>
              <TableCell sx={{ fontWeight: 700, color: isDarkMode ? '#fff' : '#222', }}>Weight</TableCell>
              <TableCell sx={{ fontWeight: 700, color: isDarkMode ? '#fff' : '#222', }}>Creation Date</TableCell>
              <TableCell sx={{ fontWeight: 700, color: isDarkMode ? '#fff' : '#222', }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 700, color: isDarkMode ? '#fff' : '#222', }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow 
                key={order.id} 
                sx={{
                  '&:not(:last-child)': {
                    borderBottom: '1px solid #E0E0E0',
                  },
                  '& td': {
                    borderBottom: 'none',
                    py: 2,
                    color: isDarkMode ? '#fff' : '#222',
                    fontSize: 15,
                  },
                  bgcolor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#fff',
                  '&:hover': {
                    bgcolor: isDarkMode ? 'rgba(255,255,255,0.04)' : '#F7F9FB',
                  }
                }}
              >
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ width: 32, height: 32, fontSize: 16, bgcolor: '#E0E0E0', color: '#222', fontWeight: 700 }}>
                      {order.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()}
                    </Avatar>
                    <span>{order.name}</span>
                  </Box>
                </TableCell>
                <TableCell>{order.center}</TableCell>
                <TableCell>{order.destination}</TableCell>
                <TableCell>{order.weight}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{getStatusChip(order.status)}</TableCell>
                <TableCell>
                  {/* Actions menu */}
                  <IconButton
                    onClick={(e) => handleMenuOpen(e, order.id)}
                    sx={{ color: isDarkMode ? '#fff' : '#333' }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && menuRowId === order.id}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{
                      sx: { minWidth: 180, boxShadow: 3, borderRadius: 2, p: 1 }
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleMenuClose();
                        navigate(`/parcels/${order.id}`);
                      }}
                      sx={{ gap: 1 }}
                    >
                      <VisibilityOutlinedIcon fontSize="small" />
                      View Details
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={{ gap: 1 }}>
                      <EditOutlinedIcon fontSize="small" />
                      Edit Parcel
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={{ color: '#EB5757', gap: 1 }}>
                      <DeleteOutlineOutlinedIcon fontSize="small" />
                      Delete Parcel
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrderTable;
