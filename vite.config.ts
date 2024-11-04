import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig((configEnv) => {
  return {
    base: '/personelwebsite/',
    plugins: [react(), sassDts(), svgr()],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
