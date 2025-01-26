import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { mainRouter } from './routes.tsx';
import { CssBaseline, FormControlLabel, Switch, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme.ts';
import './index.css';

function App() {
  // Estado para modo saber modo oscuro o claro
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // consulta al sistema si esta en modo oscuro
    const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    // si es asi, quedamos en dark caso contrario en light
    setMode(preferDarkMode.matches ? 'dark' : 'light');

    // Si el sistema cambia de modo, actualizamos el estado
    preferDarkMode.addEventListener('change', (e) => {
    setMode(e.matches ? 'dark' : 'light');
    });
  }, []);

  // Función para cambiar el modo manualmente
  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <div className='flex justify-end pt-5 pr-5'>
        <FormControlLabel
          control={<Switch checked={mode === 'dark'} onChange={handleModeChange} />}
          label={mode === 'dark' ? 'Modo Oscuro' : 'Modo Claro'}
        />
      </div>
      <RouterProvider router={mainRouter} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
