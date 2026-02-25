import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import importX from 'eslint-plugin-import-x';
import casePolice from 'eslint-plugin-case-police';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),

  // 引入 React 官方 Flat Config
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],

  // 更新 2：引入 Import-X 的官方 Flat Config 與 TypeScript 支援
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      // react 與 import-x 已經由上方的 flat config 自動註冊
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
      'case-police': casePolice,
    },
    settings: {
      react: {
        version: 'detect',
      },
      // import-x/resolver 已經被 importX.flatConfigs.typescript 處理好，所以可以省略原本冗長的路徑設定！
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // === React Refresh ===
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // === Import-X 新增/修改 ===
      // 忽略樣式檔的路徑解析錯誤
      'import-x/no-unresolved': ['error', { ignore: ['\\.scss$', '\\.css$'] }],
      // 關閉煩人的預設匯出誤判
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-unresolved': 'error',
      'import-x/named': 'error',
      'import-x/default': 'error',
      'import-x/namespace': 'error',
      'import-x/no-duplicates': 'warn',
      'import-x/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'case-police/string-check': 'warn',

      // === React Hooks ===
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // 確保 React 17+ 的 JSX 轉換不需要手動引入 React，這能解決 'React' is defined but never used 的警告
      'react/react-in-jsx-scope': 'off',
      // === TypeScript ===
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // === React ===
      'react/prop-types': 'off',

      // === Console ===
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  // Prettier 必須放在最後以覆蓋前面的規則
  prettier,
]);
