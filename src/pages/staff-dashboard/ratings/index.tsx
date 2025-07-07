import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import DataTable, { Column } from '../../../staff/components/common/DataTable';
import LayoutDashboard from '../../../staff/components/sideBar/layouts/dashboardLayout/layout';

const Ratings: FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [ratings, setRatings] = useState([
    { 
      id: 'RAT-001', 
      customerName: 'Ahmed Ali',
      serviceCenter: 'Riyadh Center',
      rating: 5,
      comment: 'Excellent service, very fast delivery',
      date: '2024-03-15',
      status: 'Published',
      response: 'Thank you for your feedback!'
    },
    { 
      id: 'RAT-002', 
      customerName: 'Sara Mohammed',
      serviceCenter: 'Jeddah Center',
      rating: 4,
      comment: 'Good service but delivery was a bit late',
      date: '2024-03-14',
      status: 'Published',
      response: 'We apologize for the delay. We are working on improving our delivery times.'
    },
    { 
      id: 'RAT-003', 
      customerName: 'Omar Hassan',
      serviceCenter: 'Dammam Center',
      rating: 3,
      comment: 'Average service, needs improvement',
      date: '2024-03-13',
      status: 'Pending',
      response: ''
    }
  ]);

  const columns: Column[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'customerName', headerName: 'Customer', type: 'avatar', width: 180 },
    { field: 'serviceCenter', headerName: 'Service Center', width: 180 },
    { field: 'rating', headerName: 'Rating', type: 'select', width: 120 },
    { field: 'comment', headerName: 'Comment', width: 250 },
    { field: 'date', headerName: 'Date', type: 'date', width: 150 },
    { field: 'status', headerName: 'Status', type: 'select', width: 120 },
    { field: 'response', headerName: 'Response', width: 250 }
  ];



  const statusOptions = [
    { value: 'Published', label: 'Published', color: '#219653' },
    { value: 'Pending', label: 'Pending', color: '#F2994A' },
    { value: 'Hidden', label: 'Hidden', color: '#EB5757' }
  ];

  const handleAddRating = (data: any) => {
    const newRating = {
      id: `RAT-${String(ratings.length + 1).padStart(3, '0')}`,
      ...data
    };
    setRatings([...ratings, newRating]);
  };

  const handleEditRating = (id: string, data: any) => {
    setRatings(ratings.map(rating => 
      rating.id === id ? { ...rating, ...data } : rating
    ));
  };

  const handleDeleteRating = (id: string) => {
    setRatings(ratings.filter(rating => rating.id !== id));
  };

  return (
    <LayoutDashboard darkMode={darkMode} setDarkMode={setDarkMode}>
      <Box sx={{ px: 13, py: 3 }}>
        <Typography variant="h2" sx={{ mb: 1, fontWeight: 700, fontSize: '30px' }}>
          Ratings Management
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          Manage customer ratings and feedback
        </Typography>

        <DataTable
          title="Rating"
          columns={columns}
          data={ratings}
          onAdd={handleAddRating}
          onEdit={handleEditRating}
          onDelete={handleDeleteRating}
          onView={(id) => console.log('View rating:', id)}
          statusOptions={statusOptions}
          addButtonText="Add New Rating"
          viewPath="/ratings"
        />
      </Box>
    </LayoutDashboard>
  );
};

export default Ratings; 