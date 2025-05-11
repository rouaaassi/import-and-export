import React, { FC, useState } from 'react';
import { Card, CardContent, Menu, MenuItem } from '@mui/material';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Checkbox, IconButton, Button, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PATH from '../../../../routes/route';
import { useNavigate } from 'react-router';

// TODO: fix this by fetching Data from API 
const orders = [
  { id: 10, name: 'Alia', center: 'Damas center', date: '2025-05-24', status: 'Paid' },
  { id: 26, name: 'sali', center: 'Hamza center', date: '2025-05-24', status: 'in process' },
  { id: 110, name: 'Ola', center: 'Ibrahim Center', date: '2025-05-24', status: 'canceled' },
  { id: 20, name: 'Omar', center: 'sales center', date: '2025-05-24', status: 'Paid' },
  { id: 100, name: 'Iram', center: 'Osm Center', date: '2025-05-24', status: 'canceled' },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Paid':
      return <span className="text-green-600 flex items-center gap-1">💲 Paid</span>;
    case 'in process':
      return <span className="text-yellow-600 flex items-center gap-1">🔄 in process</span>;
    case 'canceled':
      return <span className="text-red-600 flex items-center gap-1">⛔ canceled</span>;
    default:
      return status;
  }
};
const OrderTable: FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(orders);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const handleFilter = () => {
    if (selectedDate) {
      const filtered = orders.filter(order => order.date === selectedDate);
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders); 
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, rowId: number) => {
    setAnchorEl(event.currentTarget);
    setHoveredRow(rowId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setHoveredRow(null);
  };
  const navigate = useNavigate();

  return (
    <Card className="shadow-md">
      <CardContent>
        {/* Tabs & Filter */}
        <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4 font-semibold items-center">
          <span className="text-[#0118D8] border-b-2 border-[#0118D8] pb-1 cursor-pointer">All Orders</span>
          <span className="cursor-pointer">Paid</span>
          <span className="cursor-pointer">Cancelled</span>
          <span className="cursor-pointer">Progress</span>

          <div className="ml-auto flex flex-wrap items-center gap-2">
            <CalendarMonthIcon className="text-green-500" />
            <TextField
              type="date"
              size="small"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              sx={{ minWidth: '160px' }}
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<FilterListIcon />}
              onClick={handleFilter}
              sx={{ textTransform: 'none', borderRadius: '20px' }}
            >
              Filter
            </Button>
          </div>
        </div>

        {/* Table */}
        <Table className="min-w-full">
          <TableHead>
            <TableRow className="bg-gray-50">
              <TableCell />
              <TableCell className="font-bold text-gray-700">ID</TableCell>
              <TableCell className="font-bold text-gray-700">Customer name</TableCell>
              <TableCell className="font-bold text-gray-700">Services Centers</TableCell>
              <TableCell className="font-bold text-gray-700">Creation date</TableCell>
              <TableCell className="font-bold text-gray-700">Status</TableCell>
              <TableCell className="font-bold text-gray-700">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-50 transition-all">
                <TableCell><Checkbox /></TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell className="font-bold text-blue-700">{order.center}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{getStatusIcon(order.status)}</TableCell>
                <TableCell
                  onMouseEnter={(e) => handleMenuOpen(e, order.id)}
                  onMouseLeave={handleMenuClose}
                >
                  <IconButton>
                    <MoreVertIcon className="text-blue-700" />
                  </IconButton>

                  <Menu
                    anchorEl={anchorEl}
                    open={hoveredRow === order.id}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    MenuListProps={{
                      onMouseEnter: () => {},
                      onMouseLeave: handleMenuClose,
                    }}
                  >
                 <MenuItem onClick={() => navigate(`${PATH.parcels}/${order.id}`)}>View</MenuItem>
                    <MenuItem onClick={() => alert(`Editing order ${order.id}`)}> Edit</MenuItem>
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
