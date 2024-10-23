import eslintRecommended from '@eslint/js';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';

export default [
  eslintRecommended.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        //
      },
    },
    plugins: {
      react,
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
