import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';

const actions = [
  { label: "Add New Parcel", icon: <AddBoxIcon />, onClick: () => {} },
  { label: "Manage Customers", icon: <GroupsIcon />, onClick: () => {} },
  { label: "Track Shipments", icon: <LocalShippingIcon />, onClick: () => {} },
  { label: "View Reports", icon: <BarChartIcon />, onClick: () => {} },
];

const QuickAction = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, minWidth: {xs:"100%" , md :'30%'}}}>
      <Typography variant="h6" fontWeight={700}>Quick Actions</Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Most frequently used tasks
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="outlined"
            startIcon={action.icon}
            sx={{
              justifyContent: 'flex-start',
              color: isDark ? '#fff' : '#0014b3',
              borderColor: isDark ? '#fff' : '#0014b3',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: 16,
              bgcolor: 'background.paper',
              '&:hover': {
                bgcolor: isDark ? 'rgba(255,255,255,0.08)' : '#f5f7ff',
                borderColor: isDark ? '#fff' : '#0014b3',
              }
            }}
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default QuickAction;