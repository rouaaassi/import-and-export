import React, { useState } from 'react';
import {
  Box,
  Modal,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Alert
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import ForgetPassword from './forgetPassword';
import { loginUser } from '../../../api/handlers/signin';

import SnackBar from '../snackbar';

interface SignInModalProps {
  scrolled?: boolean;
}

const SignInModal: React.FC<SignInModalProps> = ({ scrolled }) => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('error');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleSubmit = async () => {
    try {
      const formData = { email, password };
      const response = await loginUser(formData);
      console.log('User registered:', response.data);
      setSnackbarMessage('sign in successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      handleClose();
    } catch (error) {
      console.error('Error registering user:', error);
      setSnackbarMessage('sign in failed , Try again Later');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          borderRadius: '30px',
          backgroundColor: '#0118D8',
          color: '#fff',
          px: 3,
          fontWeight: 'bold',
          textTransform: 'none',
          '&:hover': { backgroundColor: '#115293' },
        }}
      >
        Sign in
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1300,
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: 4,
              borderRadius: 4,
              minWidth: 320,
              boxShadow: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              position: 'relative',
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: '#555',
              }}
            >
              <CloseIcon />
            </IconButton>

            <Typography variant="h6" fontWeight="bold" textAlign="center">
              Welcome Back
            </Typography>

            <TextField
              label="Enter your Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Enter your password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 2,
                borderRadius: '30px',
                backgroundColor: '#0118D8',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#115293' },
              }}
            >
              Sign in
            </Button>

            <ForgetPassword />
          </Box>
        </Box>
      </Modal>

      {/* Snackbar */}
      <SnackBar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />
    </>
  );
};

export default SignInModal;
