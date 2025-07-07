import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import DataTable, { Column } from '../../../staff/components/common/DataTable';
import LayoutDashboard from '../../../staff/components/sideBar/layouts/dashboardLayout/layout';

const Customers: FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [customers, setCustomers] = useState([
    { 
      id: 'CUST-001', 
      name: 'Ahmed Ali', 
      email: 'ahmed.ali@example.com',
      phone: '+966 50 123 4567',
      address: 'Riyadh, Saudi Arabia',
      status: 'Active',
      joinDate: '2024-01-15'
    },
    { 
      id: 'CUST-002', 
      name: 'Sara Mohammed', 
      email: 'sara.m@example.com',
      phone: '+966 55 987 6543',
      address: 'Jeddah, Saudi Arabia',
      status: 'Inactive',
      joinDate: '2024-01-14'
    },
    // Add more sample data as needed
  ]);

  const columns: Column[] = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'name', headerName: 'Customer Name', type: 'avatar', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'status', headerName: 'Status', type: 'select', width: 120 },
    { field: 'joinDate', headerName: 'Join Date', type: 'date', width: 150 }
  ];

  const statusOptions = [
    { value: 'Active', label: 'Active', color: '#219653' },
    { value: 'Inactive', label: 'Inactive', color: '#EB5757' },
    { value: 'Pending', label: 'Pending', color: '#F2994A' }
  ];

  const handleAddCustomer = (data: any) => {
    const newCustomer = {
      id: `CUST-${String(customers.length + 1).padStart(3, '0')}`,
      ...data
    };
    setCustomers([...customers, newCustomer]);
  };

  const handleEditCustomer = (id: string, data: any) => {
    setCustomers(customers.map(customer => 
      customer.id === id ? { ...customer, ...data } : customer
    ));
  };

  const handleDeleteCustomer = (id: string) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return (
    <LayoutDashboard darkMode={darkMode} setDarkMode={setDarkMode}>
    <Box sx={{ px: 13 , py:3}}>
      <Typography variant="h2" sx={{ mb: 1, fontWeight: 700 , fontSize:'30px'}}>
        Customers
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
        Manage your customers and their information
      </Typography>

      <DataTable
        title="Customer"
        description="Manage customers"
        columns={columns}
        data={customers}
        onAdd={handleAddCustomer}
        onEdit={handleEditCustomer}
        onDelete={handleDeleteCustomer}
        onView={(id) => console.log('View customer:', id)}
        statusOptions={statusOptions}
        addButtonText="Add New Customer"
        viewPath="/customers"
      />
    </Box>
    </LayoutDashboard>
  );
};

export default Customers; 