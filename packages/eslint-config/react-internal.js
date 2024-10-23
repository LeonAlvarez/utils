import { resolve } from 'node:path';
import { cwd } from 'node:process';

const project = resolve(cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
export default {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'prettier', 'turbo'],
  plugins: [
    'only-warn',
    '@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
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
    'dist/',
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ['*.js?(x)', '*.ts?(x)'] },
  ],
};
