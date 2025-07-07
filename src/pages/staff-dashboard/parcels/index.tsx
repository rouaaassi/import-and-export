/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import DataTable, { Column } from '../../../staff/components/common/DataTable';
import LayoutDashboard from '../../../staff/components/sideBar/layouts/dashboardLayout/layout';

const Parcels: FC = () => {
  const [parcels, setParcels] = useState([
    { 
      id: 'TR-2024-001', 
      name: 'Ahmed Ali', 
      center: 'Riyadh Center', 
      destination: 'Jeddah', 
      weight: '2.5 kg', 
      date: '2024-01-15', 
      status: 'Delivered' 
    },
    { 
      id: 'TR-2024-002', 
      name: 'Sara Mohammed', 
      center: 'Jeddah Center', 
      destination: 'Dammam', 
      weight: '1.8 kg', 
      date: '2024-01-14', 
      status: 'Delivered' 
    },
    { 
      id: 'TR-2024-003', 
      name: 'Omar Hassan', 
      center: 'Dammam Center', 
      destination: 'Riyadh', 
      weight: '3.2 kg', 
      date: '2024-01-13', 
      status: 'Pending' 
    },
    { 
      id: 'TR-2024-004', 
      name: 'Fatima Abdullah', 
      center: 'Mecca Center', 
      destination: 'Medina', 
      weight: '0.8 kg', 
      date: '2024-01-12', 
      status: 'Cancelled' 
    },
    { 
      id: 'TR-2024-005', 
      name: 'Khalid Ibrahim', 
      center: 'Medina Center', 
      destination: 'Riyadh', 
      weight: '4.1 kg', 
      date: '2024-01-11', 
      status: 'Delivered' 
    }
  ]);

  const [darkMode, setDarkMode] = useState(false);

  const columns: Column[] = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'name', headerName: 'Customer Name', type: 'avatar', width: 200 },
    { field: 'center', headerName: 'Service Center', width: 150 },
    { field: 'destination', headerName: 'Destination', width: 150 },
    { field: 'weight', headerName: 'Weight', width: 120 },
    { field: 'date', headerName: 'Creation Date', type: 'date', width: 150 },
    { field: 'status', headerName: 'Status', type: 'select', width: 120 }
  ];

  const statusOptions = [
    { value: 'Delivered', label: 'Delivered', color: '#219653' },
    { value: 'Pending', label: 'Pending', color: '#F2994A' },
    { value: 'In Transit', label: 'In Transit', color: '#1976D2' },
    { value: 'Cancelled', label: 'Cancelled', color: '#EB5757' }
  ];

  const handleAddParcel = (data: any) => {
    const newParcel = {
      id: `TR-${new Date().getFullYear()}-${String(parcels.length + 1).padStart(3, '0')}`,
      ...data,
      weight: `${data.weight} kg`
    };
    setParcels([...parcels, newParcel]);
  };

  const handleEditParcel = (id: string, data: any) => {
    setParcels(parcels.map(parcel => 
      parcel.id === id ? { 
        ...parcel, 
        ...data,
        weight: `${data.weight} kg`
      } : parcel
    ));
  };

  const handleDeleteParcel = (id: string) => {
    setParcels(parcels.filter(parcel => parcel.id !== id));
  };

  return (
    <LayoutDashboard darkMode={darkMode} setDarkMode={setDarkMode}>
    <Box sx={{ px: 13 , py:3 }}>
      <Typography variant="h2" sx={{ mb: 1, fontWeight: 700 , fontSize:'30px' }}>
        Parcels Management
      </Typography>
      <Typography variant="body1" sx={{ mb:2, color: 'text.secondary' }}>
        Manage your parcels and track their status
      </Typography>

      <DataTable
        title="Parcel"
        description="Manage parcels"
        columns={columns}
        data={parcels}
        onAdd={handleAddParcel}
        onEdit={handleEditParcel}
        onDelete={handleDeleteParcel}
        onView={(id) => console.log('View parcel:', id)}
        statusOptions={statusOptions}
        addButtonText="Add New Parcel"
        viewPath="/parcels"
      />
    </Box>
    </LayoutDashboard>
  );
};

export default Parcels;
