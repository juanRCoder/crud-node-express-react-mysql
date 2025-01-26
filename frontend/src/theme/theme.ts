import { createTheme } from '@mui/material/styles';

// Definimos una función que recibe el 'mode' y devuelve el tema
export const theme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode == 'dark' ? '#ffffff' : '#000000',
        contrastText: mode == 'dark' ? '#000000' : '#ffffff',
      },
      success: {
        main: '#4caf50',
        contrastText: '#ffffff',
      },
    },
  });