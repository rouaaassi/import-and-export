import React, { FC, useMemo, useState } from 'react';
import LoadingProvider from './LoadingProvider';
import AppRoutes from '../routes/AppRoutes'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from './theme/theme';

const App: FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(() => getTheme(darkMode), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingProvider>
        <AppRoutes setDarkMode={setDarkMode} darkMode={darkMode} />
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;
