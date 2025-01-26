import { createTheme } from '@mui/material/styles';

// Definimos una función que recibe el 'mode' y devuelve el tema
export const theme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode: mode || 'dark',
      primary: {
        main: mode == 'dark' ? '#FEFEFE' : '#000000',
        contrastText: mode == 'dark' ? '#000000' : '#FEFEFE',
      },
      success: {
        main: '#4caf50',
        contrastText: '#FEFEFE',
      },
    },
  });