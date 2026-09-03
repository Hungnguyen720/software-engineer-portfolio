import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works at a domain root or under a repo subpath.
export default defineConfig({
  plugins: [react()],
  base: './',
});
