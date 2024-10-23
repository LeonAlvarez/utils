/** @type {import("eslint").Linter.Config} */
export default {
  root: true,
  extends: ['@ladc.dev/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
