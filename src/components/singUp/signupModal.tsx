import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import { signUpUser } from '../../../api/signUp';
import SignupButton from './signupButton';
import SignupForm from './signupForm';
import SignupSnackbar from '../snackbar';

const SignupModal = () => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('error');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleSubmit = async () => {
    try {
      const formData = { fullName, phone, email, password };
      const response = await signUpUser(formData);
      setSnackbarMessage('Sign up successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      handleClose();
    } catch (error) {
      console.error('Error registering user:', error);
      setSnackbarMessage('Sign up failed, try again later');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <SignupButton onClick={handleOpen} />

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
          <SignupForm
            fullname={fullName}
            number={phone}
            email={email}
            password={password}
            showPassword={showPassword}
            setFullName={setFullName}
            setNumber={setPhone}
            setEmail={setEmail}
            setPassword={setPassword}
            setShowPassword={setShowPassword}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
        </Box>
      </Modal>

      <SignupSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />
    </>
  );
};

export default SignupModal;
