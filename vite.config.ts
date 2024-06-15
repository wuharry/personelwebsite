import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig((configEnv) => {
  return {
    base: '/personelwebsite/',  // 設置 base 屬性
    plugins: [react(), sassDts(), svgr()],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '/assets/[name]-[hash][extname]',
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src',  // 根據你的項目結構設置別名
      },
    },
  };
});
