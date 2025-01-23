import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode:  'dark',
    primary: {
      main: '#ffffff55',
    },
    success: {
      main: '#4caf50',
      contrastText: "#ffffff"
    }
  },
});
