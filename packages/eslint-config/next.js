import { resolve } from 'node:path';
import { cwd } from 'node:process';

const project = resolve(cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
export default {
  extends: [
    'eslint:recommended',
    'prettier',
    resolve('@vercel/style-guide/eslint/next'),
    'turbo',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['only-warn'],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'coverage',
    'public',
    'dist',
    'pnpm-lock.yaml',
    'pnpm-workspace.yaml',
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'apps/next/pages/'], // adjust this path to match your pages directory
  },
};
