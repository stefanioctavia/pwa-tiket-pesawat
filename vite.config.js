import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pwa-tiket-pesawat/', // Sesuaikan dengan repository GitHub Pages Anda
});
