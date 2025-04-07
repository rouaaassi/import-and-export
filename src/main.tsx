
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
const theme = createTheme();
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);