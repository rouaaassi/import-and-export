import React from 'react';
import {
  Box, TextField, Typography, InputAdornment,
  IconButton, Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ErrorType } from '../../../types/formTypes';

interface SignupFormProps {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  showPassword: boolean;
  errors: ErrorType;
  setFullName: (value: string) => void;
  setPhone: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setShowPassword: (value: boolean) => void;
  handleClose: () => void;
  handleSubmit: () => void;
}

const SignupForm = ({
  fullName, phone, email, password, showPassword,
  setFullName, setPhone, setEmail, setPassword,
  setShowPassword, handleClose, handleSubmit, errors
}: SignupFormProps) => (
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
      sx={{ position: 'absolute', top: 8, right: 8, color: '#555' }}
    >
      <CloseIcon />
    </IconButton>

    <Typography variant="h6" fontWeight="bold" textAlign="center">
      Sign up for an account
    </Typography>

    <TextField
      label="Enter your fullname"
      type="text"
      fullWidth
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      error={!!errors.fullName}
      helperText={errors.fullName}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PersonIcon />
          </InputAdornment>
        ),
      }}
    />

    <TextField
      label="Enter your phone"
      type="text"
      fullWidth
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      error={!!errors.phone}
      helperText={errors.phone}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PhoneAndroidIcon />
          </InputAdornment>
        ),
      }}
    />

    <TextField
      label="Enter your Email"
      type="email"
      fullWidth
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={!!errors.email}
      helperText={errors.email}
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
      error={!!errors.password}
      helperText={errors.password}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockOutlinedIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
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
      Sign up
    </Button>
  </Box>
);

export default SignupForm;
