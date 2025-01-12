import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { mainRouter } from './routes.tsx';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { createCustomTheme } from './theme.ts';  // Importa la función para crear el tema
import './index.css';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createCustomTheme(prefersDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={mainRouter} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
