/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect } from 'react';
import { Card, CardContent, Menu, MenuItem, Modal, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Checkbox, IconButton, Button, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import PATH from '../../../../routes/route';
import { useNavigate } from 'react-router';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [menuRowId, setMenuRowId] = useState<string | null>(null);
  const [openNewOrderModal, setOpenNewOrderModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState<typeof orders[0] | null>(null);
  const [newOrder, setNewOrder] = useState({
    name: '',
    center: '',
    destination: '',
    weight: '',
    date: '',
    status: 'Pending'
  });
  const [openDeleteConfirmModal, setOpenDeleteConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState<typeof orders[0] | null>(null);

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Add event listener for new orders
  useEffect(() => {
    const handleNewOrder = (event: CustomEvent) => {
      const newOrder = event.detail;
      setFilteredOrders(prevOrders => [...prevOrders, newOrder]);
    };

    const orderTableElement = document.querySelector('[data-testid="order-table"]');
    if (orderTableElement) {
      orderTableElement.addEventListener('addNewOrder', handleNewOrder as EventListener);
    }

    return () => {
      if (orderTableElement) {
        orderTableElement.removeEventListener('addNewOrder', handleNewOrder as EventListener);
      }
    };
  }, []);

  const handleFilter = () => {
    let filtered = orders;
    
    if (selectedDate) {
      filtered = filtered.filter(order => order.date === selectedDate);
    }
    
    if (selectedStatus) {
      filtered = filtered.filter(order => order.status === selectedStatus);
    }
    
    setFilteredOrders(filtered);
  };

  const handleStatusFilter = (status: string | null) => {
    setSelectedStatus(status);
    if (status) {
      setFilteredOrders(orders.filter(order => order.status === status));
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

  const handleOpenNewOrderModal = () => {
    setOpenNewOrderModal(true);
  };

  const handleCloseNewOrderModal = () => {
    setOpenNewOrderModal(false);
    setNewOrder({
      name: '',
      center: '',
      destination: '',
      weight: '',
      date: '',
      status: 'Pending'
    });
  };

  const handleNewOrderChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }> | SelectChangeEvent) => {
    const { name, value } = e.target;
    setNewOrder(prev => ({
      ...prev,
      [name as string]: value
    }));
  };

  const handleAddNewOrder = () => {
    const newId = `TR-${new Date().getFullYear()}-${String(orders.length + 1).padStart(3, '0')}`;
    const orderToAdd = {
      id: newId,
      ...newOrder,
      weight: `${newOrder.weight} kg`
    };
    
    const updatedOrders = [...orders, orderToAdd];
    setFilteredOrders(updatedOrders);
    handleCloseNewOrderModal();
  };

  const handleEditClick = (order: typeof orders[0]) => {
    setEditingOrder(order);
    setNewOrder({
      name: order.name,
      center: order.center,
      destination: order.destination,
      weight: order.weight.replace(' kg', ''),
      date: order.date,
      status: order.status
    });
    setOpenEditModal(true);
    handleMenuClose();
  };

  const handleSaveEdit = () => {
    if (editingOrder) {
      const updatedOrders = filteredOrders.map(order => 
        order.id === editingOrder.id 
          ? {
              ...order,
              name: newOrder.name,
              center: newOrder.center,
              destination: newOrder.destination,
              weight: `${newOrder.weight} kg`,
              date: newOrder.date,
              status: newOrder.status
            }
          : order
      );
      setFilteredOrders(updatedOrders);
      setOpenEditModal(false);
      setEditingOrder(null);
    }
  };

  const handleDeleteClick = (order: typeof orders[0]) => {
    setOrderToDelete(order);
    setOpenDeleteConfirmModal(true);
    handleMenuClose();
  };

  const handleConfirmDelete = () => {
    if (orderToDelete) {
      const updatedOrders = filteredOrders.filter(order => order.id !== orderToDelete.id);
      setFilteredOrders(updatedOrders);
      setOpenDeleteConfirmModal(false);
      setShowSuccessModal(true);
      setOrderToDelete(null);
    }
  };

  return (
    <>
      {/* Add New Order Button */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          onClick={handleOpenNewOrderModal}
          sx={{
            bgcolor: '#0118D8',
            color: '#fff',
            '&:hover': {
              bgcolor: '#011188'
            },
            textTransform: 'none',
            px: 3,
            height: '43px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 600
          }}
          startIcon={<AddSharpIcon />}
        >
          Add New Parcel
        </Button>
      </Box>

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
            <Typography 
              sx={{ 
                cursor: 'pointer',
                color: !selectedStatus ? '#0118D8' : 'inherit',
                borderBottom: !selectedStatus ? '2px solid #0118D8' : 'none',
                pb: 1
              }}
              onClick={() => handleStatusFilter(null)}
            >
              All Orders
            </Typography>
            <Typography 
              sx={{ 
                cursor: 'pointer',
                color: selectedStatus === 'Delivered' ? '#0118D8' : 'inherit',
                borderBottom: selectedStatus === 'Delivered' ? '2px solid #0118D8' : 'none',
                pb: 1
              }}
              onClick={() => handleStatusFilter('Delivered')}
            >
              Delivered
            </Typography>
            <Typography 
              sx={{ 
                cursor: 'pointer',
                color: selectedStatus === 'Pending' ? '#0118D8' : 'inherit',
                borderBottom: selectedStatus === 'Pending' ? '2px solid #0118D8' : 'none',
                pb: 1
              }}
              onClick={() => handleStatusFilter('Pending')}
            >
              Pending
            </Typography>
            <Typography 
              sx={{ 
                cursor: 'pointer',
                color: selectedStatus === 'Cancelled' ? '#0118D8' : 'inherit',
                borderBottom: selectedStatus === 'Cancelled' ? '2px solid #0118D8' : 'none',
                pb: 1
              }}
              onClick={() => handleStatusFilter('Cancelled')}
            >
              Cancelled
            </Typography>

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
                      <MenuItem onClick={() => handleEditClick(order)} sx={{ gap: 1 }}>
                        <EditOutlinedIcon fontSize="small" />
                        Edit Parcel
                      </MenuItem>
                      <MenuItem onClick={() => handleDeleteClick(order)} sx={{ color: '#EB5757', gap: 1 }}>
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

      {/* New Order Modal */}
      <Modal
        open={openNewOrderModal}
        onClose={handleCloseNewOrderModal}
        aria-labelledby="new-order-modal"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" component="h2">
              Add New Order
            </Typography>
            <IconButton onClick={handleCloseNewOrderModal} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Customer Name"
              name="name"
              value={newOrder.name}
              onChange={handleNewOrderChange}
              fullWidth
              required
            />
            <TextField
              label="Service Center"
              name="center"
              value={newOrder.center}
              onChange={handleNewOrderChange}
              fullWidth
              required
            />
            <TextField
              label="Destination"
              name="destination"
              value={newOrder.destination}
              onChange={handleNewOrderChange}
              fullWidth
              required
            />
            <TextField
              label="Weight (kg)"
              name="weight"
              type="number"
              value={newOrder.weight}
              onChange={handleNewOrderChange}
              fullWidth
              required
            />
            <TextField
              label="Date"
              name="date"
              type="date"
              value={newOrder.date}
              onChange={handleNewOrderChange}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth required>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={newOrder.status}
                onChange={handleNewOrderChange}
                label="Status"
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Delivered">Delivered</MenuItem>
                <MenuItem value="In Transit">In Transit</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              onClick={handleAddNewOrder}
              sx={{
                mt: 2,
                bgcolor: '#0118D8',
                '&:hover': {
                  bgcolor: '#011188'
                }
              }}
            >
              Save Order
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Edit Order Modal */}
      <Modal
        open={openEditModal}
        onClose={() => {
          setOpenEditModal(false);
          setEditingOrder(null);
        }}
        aria-labelledby="edit-order-modal"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" component="h2">
              Edit Parcel
            </Typography>
            <IconButton 
              onClick={() => {
                setOpenEditModal(false);
                setEditingOrder(null);
              }} 
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Customer Name"
              name="name"
              value={newOrder.name}
              onChange={handleNewOrderChange}
              fullWidth
              required
            />
            <TextField
              label="Service Center"
              name="center"
              value={newOrder.center}
              onChange={handleNewOrderChange}
              fullWidth
              required
            />
            <TextField
              label="Destination"
              name="destination"
              value={newOrder.destination}
              onChange={handleNewOrderChange}
              fullWidth
              required
            />
            <TextField
              label="Weight (kg)"
              name="weight"
              type="number"
              value={newOrder.weight}
              onChange={handleNewOrderChange}
              fullWidth
              required
            />
            <TextField
              label="Date"
              name="date"
              type="date"
              value={newOrder.date}
              onChange={handleNewOrderChange}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth required>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={newOrder.status}
                onChange={handleNewOrderChange}
                label="Status"
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Delivered">Delivered</MenuItem>
                <MenuItem value="In Transit">In Transit</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              onClick={handleSaveEdit}
              sx={{
                mt: 2,
                bgcolor: '#0118D8',
                '&:hover': {
                  bgcolor: '#011188'
                }
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        open={openDeleteConfirmModal}
        onClose={() => {
          setOpenDeleteConfirmModal(false);
          setOrderToDelete(null);
        }}
        aria-labelledby="delete-confirm-modal"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" component="h2">
              Delete Parcel
            </Typography>
            <IconButton 
              onClick={() => {
                setOpenDeleteConfirmModal(false);
                setOrderToDelete(null);
              }} 
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography sx={{ mb: 3 }}>
            Are you sure you want to delete this parcel? This action cannot be undone.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenDeleteConfirmModal(false);
                setOrderToDelete(null);
              }}
              sx={{
                borderColor: '#0118D8',
                color: '#0118D8',
                '&:hover': {
                  borderColor: '#011188',
                  bgcolor: 'rgba(1, 24, 216, 0.04)'
                }
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleConfirmDelete}
              sx={{
                bgcolor: '#EB5757',
                '&:hover': {
                  bgcolor: '#D32F2F'
                }
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Success Modal */}
      <Modal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        aria-labelledby="success-modal"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          textAlign: 'center'
        }}>
          <CheckCircleOutlineIcon 
            sx={{ 
              fontSize: 60, 
              color: '#219653',
              mb: 2
            }} 
          />
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Parcel Deleted Successfully
          </Typography>
          <Button
            variant="contained"
            onClick={() => setShowSuccessModal(false)}
            sx={{
              bgcolor: '#219653',
              '&:hover': {
                bgcolor: '#1B7A45'
              }
            }}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default OrderTable;
