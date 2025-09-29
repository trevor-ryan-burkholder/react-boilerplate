import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    optimizeDeps: {
      include: ['uuid'],
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        preserveEntrySignatures: 'strict',
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      deps: {
        optimizer: {
          web: {
            exclude: ['@mui/icons-material'],
          },
        },
      },
    },
  };
});
