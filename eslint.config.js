import eslintRecommended from '@eslint/js';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  eslintRecommended.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      tsPlugin,
    },
    rules: {
      // Define your custom rules here
    },
  },
  {
    ignores: [
      '**/coverage/**',
      '**/public/**',
      '**/dist/**',
      '**/.next/**',
      '**/pnpm-lock.yaml',
      '**/pnpm-workspace.yaml',
    ],
  },
];
