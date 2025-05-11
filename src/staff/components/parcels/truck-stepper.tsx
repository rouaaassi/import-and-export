import React from 'react';
import {
  Box,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import InventoryIcon from '@mui/icons-material/Inventory';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const steps = [
  { label: 'Collected', icon: <LocalShippingIcon /> },
  { label: 'In transit', icon: <AirportShuttleIcon /> },
  { label: 'Ready for shipment', icon: <InventoryIcon /> },
  { label: 'Arrived in Syria', icon: <FlightLandIcon /> },
  { label: 'Out for delivery', icon: <DeliveryDiningIcon /> },
];

const TrackStepper = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 5 }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={() => (
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    p: 1,
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {step.icon}
                </Box>
              )}
            >
              <Typography variant="caption">{step.label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default TrackStepper;
