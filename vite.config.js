import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['typed.js'], // Mark 'typed.js' as an external dependency
    },
  },
});
