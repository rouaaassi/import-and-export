import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackBar = ({
  open, message, severity, onClose
}: {
  open: boolean,
  message: string,
  severity: 'success' | 'error',
  onClose: () => void
}) => (
  <Snackbar
    open={open}
    autoHideDuration={3000}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  >
    <Alert severity={severity} onClose={onClose} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>
);

export default SnackBar;
