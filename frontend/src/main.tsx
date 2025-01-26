import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { mainRouter } from './routes.tsx';
import { CssBaseline, FormControlLabel, Switch, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme.ts';
import './index.css';
import { useStore } from './zustand/store.ts';

function App() {
  // Estado para modo saber modo oscuro o claro
  const { themeMode, setThemeMode } = useStore();

  useEffect(() => {
    // consulta al sistema si esta en modo oscuro
    const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    // si es asi, quedamos en dark caso contrario en light
    setThemeMode(preferDarkMode.matches ? 'dark' : 'light');

    // Si el sistema cambia de modo, actualizamos el estado
    preferDarkMode.addEventListener('change', (e) => {
      setThemeMode(e.matches ? 'dark' : 'light');
    });
  }, []);

  // Función para cambiar el modo manualmente
  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThemeMode(event.target.checked ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme(themeMode)}>
      <CssBaseline />
      <div className='flex justify-end pt-5 pr-5'>
        <FormControlLabel
          control={<Switch checked={themeMode === 'dark'} onChange={handleModeChange} />}
          label={themeMode === 'dark' ? 'Modo Oscuro' : 'Modo Claro'}
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
