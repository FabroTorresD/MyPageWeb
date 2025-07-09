import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',           // ⟵ raíz del sitio en Vercel
  build: {
    outDir: 'dist',    // preset de Vercel ya lo busca ahí
    emptyOutDir: true
  }
});
