import { defineConfig, loadEnv, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';
  return {
    // 部署的路徑
    base: '/personelwebsite/',
    /**
     * define - 定義全局變數
     * 格式必須是JSON.stringify() 包裹的字串
     * 使用場景：
     * if (__DEV__) { console.log('開發模式') }
     * console.log('版本:', __APP_VERSION__)
     * */
    define: {
      __APP_VERSION__: JSON.stringify(env.npm_package_version),
      __DEV__: isDevelopment,
    },
    plugins: [
      react(),
      tailwindcss(),
      /**
       * vite-plugin-svgr - SVG 轉 React 組件
       * 允許你將 SVG 文件作為 React 組件導入
       */
      svgr({
        svgrOptions: {
          /**
           * icon: true - 將 SVG 視為圖標
           * 會移除 width/height 屬性，讓你可以自由控制尺寸
           */
          icon: true,

          /**
           * dimensions: false - 不限制尺寸
           * 讓 SVG 可以自由縮放，不受原始尺寸限制
           */
          dimensions: false,
        },
      }),
      /**
       * vite-plugin-compression - Brotli 壓縮插件
       * Brotli 是比 Gzip 更先進的壓縮算法
       *
       * 效果：500KB → 120KB（壓縮率約 76%，比 Gzip 更好）
       */
      isProduction &&
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          /**
           * brotliCompress - Brotli 壓縮算法
           */
          algorithm: 'brotliCompress',
          ext: '.br',
        }),
      /**
       * rollup-plugin-visualizer - 打包分析工具
       * 生成可視化的打包分析報告
       *
       * 使用場景：
       * 1. 找出佔用空間最大的依賴
       * 2. 檢查是否有重複打包的模組
       * 3. 優化打包策略
       */
      isProduction &&
        visualizer({
          /**
           * filename - 報告文件路徑
           * 打包後會生成 dist/stats.html
           * 用瀏覽器打開即可看到視覺化分析圖
           */
          filename: './dist/stats.html',

          /**
           * open - 是否自動打開報告
           * false: 不自動打開（避免每次打包都彈出瀏覽器）
           * 手動打開：open dist/stats.html
           */
          open: false,

          /**
           * gzipSize - 顯示 Gzip 壓縮後的大小
           * 讓你看到真實的傳輸大小
           */
          gzipSize: true,

          /**
           * brotliSize - 顯示 Brotli 壓縮後的大小
           */
          brotliSize: true,
        }),
    ].filter(Boolean) as PluginOption[],
    server: {
      port: 9487,
      /**
       * host - 是否監聽所有 IP 地址
       * true: 可以通過局域網 IP 訪問（例如：192.168.1.100:3000）
       * 用途：手機測試、給同事展示
       *
       * false: 只能通過 localhost 訪問
       */
      host: true,
      /**
       * open - 啟動時(run dev)是否自動打開瀏覽器
       */
      open: true,
    },
    preview: {
      port: 4173, // 預覽端口
      host: true, // 允許局域網訪問
      open: true, // 自動打開瀏覽器
    },
    build: {
      /**
       * outDir - 輸出目錄
       * 打包後的文件會放在 dist/ 目錄
       */
      outDir: 'dist',
      /**
       * emptyOutDir - 每次打包前清空是否清空dist/
       */
      emptyOutDir: true,
      /**
       * sourcemap - 是否生成 source map
       * source map 可以將壓縮後的代碼映射回原始代碼
       *
       * 開發環境：true（方便調試）
       * 生產環境：false（避免源碼洩漏，減小體積）
       *
       */
      sourcemap: isDevelopment ? true : false,
      /**
       * reportCompressedSize - 是否顯示壓縮後的文件大小
       */
      reportCompressedSize: true,

      /**
       * chunkSizeWarningLimit - chunk 大小警告限制（KB）
       * 如果某個 chunk 超過這個大小，會顯示警告
       *
       * 如果看到警告，說明需要進一步拆分代碼
       */
      chunkSizeWarningLimit: 1500,
      /**
       * minify - 代碼壓縮工具
       *
       * 選項：
       * - 'terser': 壓縮率最高，速度較慢（推薦生產環境）
       * - 'esbuild': 速度最快，壓縮率略低
       * - false: 不壓縮（開發環境）
       *
       * 效果：500KB 原始代碼 → 150KB 壓縮後
       */
      minify: isProduction ? 'terser' : false,
      /**
       * terserOptions - Terser 壓縮選項
       * 只有當 minify: 'terser' 時才生效
       */
      terserOptions: {
        compress: {
          /**
           * drop_console - 刪除 console.log
           *
           * 好處：
           * 1. 減小體積（約 5-10%）
           * 2. 防止敏感信息洩漏
           * 3. 提升性能（console 有性能開銷）
           */
          drop_console: isProduction,
          /**
           * drop_debugger - 移除代碼中的 debugger;
           */
          drop_debugger: isProduction,
          /**
           * pure_funcs - 標記純函數
           * 告訴壓縮器這些函數沒有副作用，可以安全刪除
           *
           * 例如：console.log、console.info 的調用可以被完全刪除
           */
          pure_funcs: isProduction ? ['console.log', 'console.info'] : [],
        },
        format: {
          // 是否保留註解
          comments: false,
        },
      },
      /**
       * rollupOptions - Rollup 打包配置
       * Vite 底層使用 Rollup 進行打包
       */
      rollupOptions: {
        output: {
          /**
           * assetFileNames - 靜態資源文件命名規則，可以根據文件類型動態決定路徑
           *
           * 目標：
           * - 圖片放 assets/images/
           * - 字體放 assets/fonts/
           * - 其他放 assets/[type]/
           */
          assetFileNames: (assetInfo) => {
            const name = assetInfo.names?.[0] || 'unknown';

            // 獲取文件副檔名
            const info = name.split('.');
            let extType = info[info.length - 1];
            /**
             * 圖片文件分類
             * 匹配 .png, .jpg, .jpeg, .gif, .svg, .webp, .avif
             */
            if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(name)) {
              extType = 'images';
            } else if (/\.(woff2?|eot|ttf|otf)$/i.test(name)) {
              /**
               * 字體文件分類
               * 匹配 .woff, .woff2, .eot, .ttf, .otf
               */
              extType = 'fonts';
            }
            /**
             * 返回路徑模板
             * [name]: 原始文件名
             * [hash]: 內容哈希（用於緩存控制）
             * [extname]: 副檔名
             */
            return `assets/${extType}/[name]-[hash][extname]`;
          },
        },
      },
    },
    /**
     * chunkFileNames - JS chunk 文件命名,代碼分割產生的 chunk 會放在 js/ 目錄下
     */
    chunkFileNames: 'js/[name]-[hash].js',
    /**
     * entryFileNames - 入口文件命名
     * 主要的入口文件（通常是 main.js）
     */
    entryFileNames: 'js/[name]-[hash].js',
    /**
     * manualChunks - 手動代碼分割
     * 這是最重要的性能優化配置！
     *
     * 目標：
     * 1. 把不常變動的第三方庫分離出來（利用瀏覽器緩存）
     * 2. 把大型庫單獨分割（避免單個文件過大）
     * 3. 按需載入（用戶不訪問某個頁面就不下載對應的代碼）
     *
     * 參數 id: 模組的完整路徑
     * 例如：/Users/xxx/project/node_modules/react/index.js
     */
    manualChunks: (id: string) => {
      /**
       * 只處理 node_modules 中的依賴
       * 你自己的代碼不需要特殊處理，Vite 會自動優化
       */
      if (id.includes('node_modules')) {
        /**
         * React 核心庫
         * react + react-dom 通常會一起使用，放在同一個 chunk
         *
         * 好處：
         * - React 很少更新，可以長期緩存
         * - 多個頁面共用同一個 React chunk
         */
        if (id.includes('react') || id.includes('react-dom')) {
          return 'react-vendor';
        }

        /**
         * React Router
         * 路由庫單獨分割
         *
         * 原因：不是所有頁面都需要路由（例如 404 頁面）
         */
        if (id.includes('react-router')) {
          return 'router-vendor';
        }

        /**
         * 狀態管理庫
         * Zustand、Redux 等
         *
         * 注意：根據你實際使用的庫調整
         */
        if (id.includes('zustand') || id.includes('redux')) {
          return 'state-vendor';
        }

        /**
         * 日期處理庫
         * date-fns、dayjs 等通常體積較大
         *
         * 好處：如果某些頁面不需要日期處理，就不會下載這個 chunk
         */
        if (id.includes('date-fns') || id.includes('dayjs')) {
          return 'date-vendor';
        }

        /**
         * UI 組件庫
         * Headless UI、Framer Motion 等動畫庫
         *
         * 這些庫通常體積較大，單獨分割
         */
        if (id.includes('@headlessui') || id.includes('framer-motion')) {
          return 'ui-vendor';
        }

        /**
         * 其他第三方庫
         * 所有沒有特殊處理的依賴都放在 vendor chunk
         *
         * 這是一個「兜底」策略
         */
        return 'vendor';
      }

      /**
       * 不返回任何值 = 使用默認處理
       * 你自己的代碼會根據 import 關係自動分割
       */
    },
    /**
     * cssCodeSplit - CSS 代碼分割
     * true: 每個 JS chunk 對應的 CSS 會被分割成獨立文件
     * false: 所有 CSS 打包成一個文件
     *
     * 建議：true（按需載入 CSS，提升首屏速度）
     */
    cssCodeSplit: true,

    /**
     * cssMinify - 是否壓縮 CSS
     * 生產環境壓縮 CSS，移除空格、註釋等
     *
     * 效果：50KB CSS → 30KB（約 40% 減少）
     */
    cssMinify: isProduction,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@types': path.resolve(__dirname, './src/types'),
        '@store': path.resolve(__dirname, './src/store'),
      },
      /**
       * extensions - 自動解析的副檔名,import 時可以省略這些副檔名
       *
       * 順序很重要！
       * Vite 會按順序查找，找到第一個就停止
       * .mjs 排最前面是因為它是 ES Module 的標準格式
       */
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },

    css: {
      modules: {
        /**
         * localsConvention - CSS 類名轉換規則
         *
         * CSS: .my-button { }
         * JS: styles.myButton  （駝峰命名）
         *
         * 選項：
         * - 'camelCase': 保留原名，同時生成駝峰版本
         * - 'camelCaseOnly': 只生成駝峰版本（推薦，更清晰）
         * - 'dashes': 保留橫線
         */
        localsConvention: 'camelCaseOnly',
      },
      /**
       * devSourcemap - 開發環境的 CSS source map,可以在開發者工具看到 CSS 來自哪個文件
       */
      devSourcemap: isDevelopment,
    },
    /**
     * optimizeDeps - 依賴優化配置
     * Vite 會在開發時預構建依賴，提升啟動速度
     */
    optimizeDeps: {
      /**
       * include - 強制預構建的依賴
       *
       * 使用場景：
       * 1. 某些依賴沒有被自動檢測到
       * 2. 某些大型依賴需要預構建以提升性能
       *
       */
      include: ['react', 'react-dom', 'react-router-dom'],

      /**
       * exclude - 排除預構建的依賴
       *
       * 使用場景：
       * 1. 某些依賴預構建後反而變慢
       * 2. 某些依賴需要動態載入（例如 WebAssembly）
       */
      exclude: [
        // 需要排除的依賴...
      ],
    },
    /**
     * esbuild - esbuild 配置
     * Vite 使用 esbuild 進行快速的 TypeScript 和 JSX 轉譯
     */
    esbuild: {
      /**
       * drop - 刪除特定語句,生產環境刪除 console 和 debugger
       */
      drop: isProduction ? ['console', 'debugger'] : [],

      /**
       * minify 系列 - esbuild 壓縮選項
       *
       * minifyIdentifiers: 壓縮變數名（longVariableName → a）
       * minifySyntax: 簡化語法（if (true) {} → if(true){} ）
       * minifyWhitespace: 刪除空格
       *
       * 這些只在 build.minify: 'esbuild' 時生效
       * 目前用的是 terser，這裡是備用配置
       */
      minifyIdentifiers: isProduction,
      minifySyntax: isProduction,
      minifyWhitespace: isProduction,
    },
    /**
     * logLevel - 日誌級別
     *
     * 選項：
     * - 'info': 顯示所有信息（開發環境推薦）
     * - 'warn': 只顯示警告和錯誤
     * - 'error': 只顯示錯誤
     * - 'silent': 完全靜默
     */
    logLevel: isDevelopment ? 'info' : 'warn',
  };
});
