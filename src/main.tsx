/* import-meta-env */
/* API_BASE_URL, SETTINGS_SUBSCRIPTION_KEY, SETTINGS_ENVIRONMENT_SUFFIX */

import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ThemeProvider } from './context/ThemeProvider';
import { QueryProvider } from './lib/query/queryClient';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryProvider>
  </StrictMode>,
);
