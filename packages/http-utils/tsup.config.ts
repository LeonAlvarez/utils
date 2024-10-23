import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ["src/**/*@(ts|tsx)"],
  format: [
    'esm',
    //'cjs'
  ],
  splitting: false,
  clean: true,
  dts: true,
  treeshake: true,
  shims: true,
})