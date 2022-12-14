import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, "src/app"),
  publicDir: path.resolve(__dirname, "src/app/public"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true
  },
  plugins: [react()],
  envDir: __dirname,
})
