import { createTheme } from '@mui/material/styles';

export const createCustomTheme = (isDarkMode: boolean) => createTheme({
  palette: {
    mode: isDarkMode ? 'dark' : 'light',
    primary: {
      main: '#1976d2',
    },
    success: {
      main: '#4caf50',
      contrastText: "#ffffff"
    },
    background: {
      default: isDarkMode ? '#121212' : '#ffffff',
    },
    text: {
      primary: isDarkMode ? '#ffffff' : '#121212',
    },
  },
});
