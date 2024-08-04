import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 5000, // Sesuaikan batas ukuran chunk sesuai kebutuhan
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Contoh: Pisahkan dependensi utama menjadi chunk terpisah
        },
      },
    },
  },
});