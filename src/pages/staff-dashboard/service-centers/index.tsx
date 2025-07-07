import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import DataTable, { Column, DataItem } from '../../../staff/components/common/DataTable';
import LayoutDashboard from '../../../staff/components/sideBar/layouts/dashboardLayout/layout';
import { IServiceCenterDetails } from '../../../../types/service_center';

const ServiceCenters: FC = () => {
  const [serviceCenterDetails, setServiceCenterDetails] = useState<IServiceCenterDetails[]>([
    {
      id: 'SC-001',
      name: 'Damascus Service Center',
      phone: '+963 11 1234567',
      address: {
        city: 'Damascus',
        street: 'Al-Mazzeh Street',
        zip: '12345'
      },
      services_offered: ['Parcel Delivery', 'Express Shipping', 'International Shipping'],
      special_instructions: '24/7 service available',
      operating_hours: [
        {
          day: 'Monday',
          start: '08:00',
          end: '20:00'
        },
        {
          day: 'Tuesday',
          start: '08:00',
          end: '20:00'
        }
      ]
    },
    {
      id: 'SC-002',
      name: 'Aleppo Service Center',
      phone: '+963 21 7654321',
      address: {
        city: 'Aleppo',
        street: 'Al-Aziziyah Street',
        zip: '54321'
      },
      services_offered: ['Parcel Delivery', 'Local Shipping'],
      special_instructions: 'Closed on Sundays',
      operating_hours: [
        {
          day: 'Monday',
          start: '09:00',
          end: '18:00'
        },
        {
          day: 'Tuesday',
          start: '09:00',
          end: '18:00'
        }
      ]
    }
  ]);

  // Convert detailed data to table format
  const serviceCenters: DataItem[] = serviceCenterDetails.map(center => ({
    id: center.id,
    name: center.name,
    phone: center.phone,
    address: `${center.address.street}, ${center.address.city}, ZIP: ${center.address.zip}`,
    services_offered: center.services_offered.join(', '),
    special_instructions: center.special_instructions,
    operating_hours: center.operating_hours.map(hours => 
      `${hours.day}: ${hours.start}-${hours.end}`
    ).join(', ')
  }));

  const [darkMode, setDarkMode] = useState(false);

  const columns: Column[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Center Name', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'address', headerName: 'Address', width: 250 },
    { field: 'services_offered', headerName: 'Services', width: 200 },
    { field: 'operating_hours', headerName: 'Operating Hours', width: 200 }
  ];

  const handleAddServiceCenter = (data: Omit<DataItem, 'id'>) => {
    const newServiceCenter: IServiceCenterDetails = {
      id: `SC-${String(serviceCenterDetails.length + 1).padStart(3, '0')}`,
      name: data.name as string,
      phone: data.phone as string,
      address: {
        city: (data.address as string).split(',')[1].trim(),
        street: (data.address as string).split(',')[0].trim(),
        zip: (data.address as string).split('ZIP:')[1].trim()
      },
      services_offered: (data.services_offered as string).split(', '),
      special_instructions: data.special_instructions as string,
      operating_hours: (data.operating_hours as string).split(', ').map(hours => {
        const [day, time] = hours.split(': ');
        const [start, end] = time.split('-');
        return { day, start, end };
      })
    };
    setServiceCenterDetails([...serviceCenterDetails, newServiceCenter]);
  };

  const handleEditServiceCenter = (id: string, data: Omit<DataItem, 'id'>) => {
    setServiceCenterDetails(serviceCenterDetails.map(center => {
      if (center.id === id) {
        const updatedCenter = { ...center };
        if (data.name) updatedCenter.name = data.name as string;
        if (data.phone) updatedCenter.phone = data.phone as string;
        if (data.address) {
          const [street, city, zip] = (data.address as string).split(', ');
          updatedCenter.address = {
            street: street,
            city: city,
            zip: zip.split('ZIP: ')[1]
          };
        }
        if (data.services_offered) {
          updatedCenter.services_offered = (data.services_offered as string).split(', ');
        }
        if (data.special_instructions) {
          updatedCenter.special_instructions = data.special_instructions as string;
        }
        if (data.operating_hours) {
          updatedCenter.operating_hours = (data.operating_hours as string).split(', ').map(hours => {
            const [day, time] = hours.split(': ');
            const [start, end] = time.split('-');
            return { day, start, end };
          });
        }
        return updatedCenter;
      }
      return center;
    }));
  };

  const handleDeleteServiceCenter = (id: string) => {
    setServiceCenterDetails(serviceCenterDetails.filter(center => center.id !== id));
  };

  return (
    <LayoutDashboard darkMode={darkMode} setDarkMode={setDarkMode}>
      <Box sx={{ px: 13, py: 3 }}>
        <Typography variant="h2" sx={{ mb: 1, fontWeight: 700, fontSize: '30px' }}>
          Service Centers Management
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          Manage your service centers and their details
        </Typography>

        <DataTable
          title="Service Center"
          description="Manage service centers"
          columns={columns}
          data={serviceCenters}
          onAdd={handleAddServiceCenter}
          onEdit={handleEditServiceCenter}
          onDelete={handleDeleteServiceCenter}
          onView={(id) => console.log('View service center:', id)}
          addButtonText="Add New Service Center"
          viewPath="/service-centers"
        />
      </Box>
    </LayoutDashboard>
  );
};

export default ServiceCenters;